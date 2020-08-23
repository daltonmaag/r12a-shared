var spreadsheet = `
𐣠		a	ʾ	ʔ	ʔ	consonant					U+108E0: HATRAN LETTER ALEPH	
												
𐣰		p	p	p	p	consonant					U+108F0: HATRAN LETTER PE	
𐣡		b	b	b	b	consonant					U+108E1: HATRAN LETTER BETH	
𐣵		t	t	t	t	consonant					U+108F5: HATRAN LETTER TAW	
𐣣		d	d	d	d r	consonant					U+108E3: HATRAN LETTER DALETH-RESH	
𐣨		T	ṭ	tˤ	tˤ	consonant					U+108E8: HATRAN LETTER TETH	
𐣪		k	k	k	k	consonant					U+108EA: HATRAN LETTER KAPH	
𐣢		g	g	g	g	consonant					U+108E2: HATRAN LETTER GIMEL	
𐣲		q	q	q	q	consonant					U+108F2: HATRAN LETTER QOPH	
												
𐣮		s	s	s	s	consonant					U+108EE: HATRAN LETTER SAMEKH	
𐣦		z	z	z	z	consonant					U+108E6: HATRAN LETTER ZAYN	
𐣱		S	ṣ	sˤ	sˤ	consonant					U+108F1: HATRAN LETTER SADHE	
𐣴		s	š	ʃ	ʃ	consonant					U+108F4: HATRAN LETTER SHIN	
𐣧		H	ḥ	ħ	ħ	consonant					U+108E7: HATRAN LETTER HETH	
𐣯		{	ʿ	ʕ	ʕ	consonant					U+108EF: HATRAN LETTER AYN	
𐣤		h	h	h	h	consonant					U+108E4: HATRAN LETTER HE	
												
𐣬		m	m	m	m	consonant					U+108EC: HATRAN LETTER MEM	
𐣭		n	n	n	n	consonant					U+108ED: HATRAN LETTER NUN	
												
𐣥		w	w	w	w	consonant					U+108E5: HATRAN LETTER WAW	
𐣫		l	l	l	l	consonant					U+108EB: HATRAN LETTER LAMEDH	
𐣩		y	y	y	j	consonant					U+108E9: HATRAN LETTER YODH	
												
												
𐣻		I	I	1		number					U+108FB: HATRAN NUMBER ONE	
𐣼		V	V	V		number					U+108FC: HATRAN NUMBER FIVE	
𐣽		X	X	1⁰		number					U+108FD: HATRAN NUMBER TEN	
𐣾		X	XX	2⁰		number					U+108FE: HATRAN NUMBER TWENTY	
𐣿		C	C	C₀		number					U+108FF: HATRAN NUMBER ONE HUNDRED	
												
												
												
												
												
												
												
												
												
\u200C		=		ₓ						zwnj	U+200C: ZERO WIDTH NON-JOINER	punctuation
\u200D		=		₊						zwj	U+200D: ZERO WIDTH JOINER	punctuation
\u200E		=		ˡʳᵐ						lrm	U+200E: LEFT-TO-RIGHT MARK	punctuation
\u200F		=		ʳˡᵐ						rlm	U+200F: RIGHT-TO-LEFT MARK	punctuation
\u061C		=		ᵃˡᵐ						alm	U+061C: ARABIC LETTER MARK	punctuation
\u2067		=		ʳˡⁱ						rli	U+2067: RIGHT-TO-LEFT ISOLATE	punctuation
\u2066		=		ˡʳⁱ						lri	U+2066: LEFT-TO-RIGHT ISOLATE	punctuation
\u202B		=		ʳˡᵉ						rle	U+202B: RIGHT-TO-LEFT EMBEDDING	punctuation
\u202A		=		ˡʳᵉ						lre	U+202A: LEFT-TO-RIGHT EMBEDDING	punctuation
\u2069		=		ᵖᵈⁱ						pdi	U+2069: POP DIRECTIONAL ISOLATE	punctuation
\u202C		=		ᵖᵈᶠ						pdf	U+202C: POP DIRECTIONAL FORMATTING	punctuation



`




var cols = {
"class": 1,
"key":2,
"transcription":3,
"transLoc": 4,
"ipaLoc": 5,
"transckey": 0,
"typeLoc": 6,
"statusLoc": 7,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"lc":0,
"uc":0,
"meaning":0,
"shape": 0,
"numLoc": 0,
"nameLoc": 9,
"nnameLoc": 0,
"ucsName": 11,
"block": 12,

"othertranscriptions": [[3, 'Latin']]
}
