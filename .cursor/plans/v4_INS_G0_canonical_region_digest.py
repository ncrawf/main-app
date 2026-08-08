#!/usr/bin/env python3
"""CANONICAL region digest — the single definition. Re-used verbatim at E1.
SHA-256 over exact UTF-8 bytes of all complete lines strictly between the
BEGIN/END marker lines, joined with \n, excluding markers, no trailing
newline, no normalization."""
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
