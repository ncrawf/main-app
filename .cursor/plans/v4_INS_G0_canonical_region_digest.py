#!/usr/bin/env python3
"""canonical_region_content_digest — the single definition. Re-used verbatim at E1.

This is a canonical LF-SERIALIZED REGION CONTENT digest. It is NOT an
exact-byte digest: the file is read in text mode and the region is re-encoded
after line serialization.

Exactly what it does:
  1. UTF-8 decode the file
  2. take the span strictly between the BEGIN and END marker lines
  3. drop one leading and one trailing blank boundary line, if present
  4. join the remaining lines with LF, no trailing newline
  5. no whitespace normalization WITHIN any content line
  6. SHA-256 the UTF-8 encoding of that string

Exact-byte proof is Git blob equality, not this digest. E1 runs both."""
import hashlib,sys,re,glob
def canon(s,k):
    b=f"<!-- NICK_VERBATIM_{k}_BEGIN -->"; e=f"<!-- NICK_VERBATIM_{k}_END -->"
    mid=s.split(b,1)[1].split(e,1)[0]; lines=mid.split("\n")
    if lines and lines[0].strip()=="": lines=lines[1:]
    if lines and lines[-1].strip()=="": lines=lines[:-1]
    return "\n".join(lines)
ok=True
for p in sorted(glob.glob(".cursor/plans/v4_INS_G0_*verbatim_2026-08-08.md")):
    s=open(p,encoding="utf-8").read()
    for k in ("PROMPT","RESPONSE"):
        h=hashlib.sha256(canon(s,k).encode()).hexdigest()
        m=re.search(rf"\| {k.title()} region — SHA-256 \*\*\(canonical\)\*\* \| `([0-9a-f]{{64}})` \|",s)
        rec=m.group(1) if m else None
        match = (rec==h); ok&=match
        print(f"  {'MATCH  ' if match else '*MISMATCH*'} {k:8} {h[:16]}…  {p.split('/')[-1][:46]}")
print("\nALL SIX RECOMPUTED DIGESTS EQUAL THEIR IN-FILE RECEIPTS:",ok)
sys.exit(0 if ok else 1)
