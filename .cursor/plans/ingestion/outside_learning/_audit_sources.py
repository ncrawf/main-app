#!/usr/bin/env python3
"""Read-only audit: verify every EVSRC source has valid, correctly-placed
§1 transcript + §3 Review-001 (Knox) bodies; flag empties, mismatches, dupes."""
import os, re, hashlib, glob

SRC = os.path.join(os.path.dirname(__file__), "sources", "2026-06")
TRANSCRIPT_START = "PASTE THE FULL TRANSCRIPT BELOW"
TRANSCRIPT_END   = "END OF TRANSCRIPT"
KNOX_START       = "PASTE KNOX"
END_MARK         = "\u2b06\ufe0f\u2b06\ufe0f\u2b06\ufe0f  END  \u2b06\ufe0f\u2b06\ufe0f\u2b06\ufe0f"  # "⬆️⬆️⬆️  END  ⬆️⬆️⬆️"

def clean(lines):
    out = []
    for l in lines:
        s = l.strip()
        if not s or s == "&nbsp;":
            continue
        out.append(s)
    return out

def block(text, start_sub, end_sub):
    si = text.find(start_sub)
    if si == -1: return None
    si = text.find("\n", si)
    ei = text.find(end_sub, si)
    if ei == -1: return None
    return text[si:ei]

def first_words(lines, n=140):
    joined = " ".join(lines)
    joined = re.sub(r"\d+:\d+", "", joined)          # strip timestamps like 0:03
    joined = re.sub(r"\bseconds?\b", "", joined)
    joined = re.sub(r"\s+", " ", joined).strip()
    return joined[:n]

rows = []
tfp = {}  # transcript fingerprint -> [files]
kfp = {}
for path in sorted(glob.glob(os.path.join(SRC, "EVSRC-*.md"))):
    name = os.path.basename(path)
    text = open(path, encoding="utf-8").read()
    tb = block(text, TRANSCRIPT_START, TRANSCRIPT_END)
    kb = block(text, KNOX_START, END_MARK)
    tlines = clean(tb.split("\n")) if tb else []
    klines = clean(kb.split("\n")) if kb else []
    tchars = sum(len(x) for x in tlines)
    kchars = sum(len(x) for x in klines)
    thead = first_words(tlines)
    khead = first_words(klines)
    # fingerprint first 200 chars of transcript / knox for dup detection
    tf = hashlib.md5(thead[:120].lower().encode()).hexdigest()[:8] if tchars else "EMPTY"
    kf = hashlib.md5(khead[:120].lower().encode()).hexdigest()[:8] if kchars else "EMPTY"
    if tchars: tfp.setdefault(tf, []).append(name)
    if kchars: kfp.setdefault(kf, []).append(name)
    rows.append((name, tchars, kchars, tf, kf, thead, khead))

print("="*100)
print("PER-FILE AUDIT  (id | transcript_chars | knox_chars)")
print("="*100)
for name, tc, kc, tf, kf, th, kh in rows:
    sid = name.split("_")[0]
    tflag = "  EMPTY-T!" if tc == 0 else ""
    kflag = "  EMPTY-KNOX" if kc == 0 else ""
    print(f"\n{sid}  T={tc:<6} K={kc:<6}{tflag}{kflag}")
    print(f"   file: {name}")
    print(f"   §1 transcript: {th!r}")
    print(f"   §3 knox      : {kh!r}")

print("\n" + "="*100)
print("DUPLICATE DETECTION (same opening text in >1 file = likely wrong/duped paste)")
print("="*100)
dups = {k:v for k,v in tfp.items() if len(v) > 1}
if dups:
    for k,v in dups.items():
        print(f"  TRANSCRIPT DUP [{k}]: {v}")
else:
    print("  transcripts: no duplicate openings ✓")
kdups = {k:v for k,v in kfp.items() if len(v) > 1}
if kdups:
    for k,v in kdups.items():
        print(f"  KNOX DUP [{k}]: {v}")
else:
    print("  knox blocks: no duplicate openings ✓")

print("\n" + "="*100)
empties = [r[0] for r in rows if r[1] == 0]
kempties = [r[0] for r in rows if r[2] == 0]
print(f"TOTAL FILES: {len(rows)}")
print(f"EMPTY TRANSCRIPT: {empties or 'none ✓'}")
print(f"EMPTY KNOX: {kempties or 'none'}")
