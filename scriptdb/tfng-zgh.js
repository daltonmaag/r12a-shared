var spreadsheet = `
ⵒ		p	p	p	p	p	پ	plosive	foreign sound	yap	ⵢⴰⵒ	U+2D52: TIFINAGH LETTER YAP	tifinagh
ⵜ		t	t	t	t	t	ت	plosive		yat	ⵢⴰⵜ	U+2D5C: TIFINAGH LETTER YAT	tifinagh
ⵟ		t	tˁ	tˁ	t	ṭ	ط	plosive		yaṭ	ⵢⴰⵟ	U+2D5F: TIFINAGH LETTER YATT	tifinagh
ⵞ	-	t	ʧ	t͡ʃ	c	ch tš	تش	affricate	touareg/kabyle	yatš	ⵢⴰⵞ	U+2D5E: TIFINAGH LETTER YACH	tifinagh
ⴽ		k	k	k	k	k	ک	plosive		yak	ⵢⴰⴽ	U+2D3D: TIFINAGH LETTER YAK	tifinagh
ⴾ	-	k	k̇	k	k	k	ک	plosive	touareg	yak	ⵢⴰⴾ	U+2D3E: TIFINAGH LETTER TUAREG YAK	tifinagh
ⵇ		q	q	q qʷ ɢ	q	q	ق	plosive		yaq	ⵢⴰⵇ	U+2D47: TIFINAGH LETTER YAQ	tifinagh
ⵈ	-	q	q̇	q qʷ	q	q	ق	plosive	touareg	yaq	ⵢⴰⵈ	U+2D48: TIFINAGH LETTER TUAREG YAQ	tifinagh
													
ⴱ		b	b	b	b	b	ب	plosive		yab	ⵢⴰⴱ	U+2D31: TIFINAGH LETTER YAB	tifinagh
ⴷ		d	d	d	d	d	د	plosive		yad	ⵢⴰⴷ	U+2D37: TIFINAGH LETTER YAD	tifinagh
ⴹ		d	dˁ	dˁ	d	ḍ	ض	plosive		yaḍ	ⵢⴰⴹ	U+2D39: TIFINAGH LETTER YADD	tifinagh
ⴵ	-	d	ʤ	d͡ʒ	g	dj	ج	affricate	touareg/kabyle	yadj	ⵢⴰⴵ	U+2D35: TIFINAGH LETTER BERBER ACADEMY YAJ	tifinagh
ⴶ	-	d	ʤ̇	d͡ʒ	d	dj	ج	affricate	touareg/kabyle	yadj	ⵢⴰⴶ	U+2D36: TIFINAGH LETTER YAJ	tifinagh
ⴳ		g	g	ɡ	g	g	گ	plosive		yag	ⵢⴰⴳ	U+2D33: TIFINAGH LETTER YAG	tifinagh
													
													
ⴼ		f	f	f	f	f	ف	fricative		yaf	ⵢⴰⴼ	U+2D3C: TIFINAGH LETTER YAF	tifinagh
ⵝ		Q	θ	θ	t	t	ت	fricative	extended	yat fricative	ⵢⴰⵝ	U+2D5D: TIFINAGH LETTER YATH	tifinagh
ⵙ		s	s	s	s	s	س	fricative		yas	ⵢⴰⵙ	U+2D59: TIFINAGH LETTER YAS	tifinagh
ⵚ		s	sˁ	sˁ	s	ṣ ts	ص	fricative		yaṣ	ⵢⴰⵚ	U+2D5A: TIFINAGH LETTER YASS	tifinagh
ⵛ		s	ʃ	ʃ	s	š sh	ش	fricative		yaš	ⵢⴰⵛ	U+2D5B: TIFINAGH LETTER YASH	tifinagh
ⴿ		c	x	x	k	k	ک	fricative	extended	yak fricative	ⵢⴰⴿ	U+2D3F: TIFINAGH LETTER YAKHH	tifinagh
ⵅ		x	χ	χ	x	x kh	خ	fricative		yax	ⵢⴰⵅ	U+2D45: TIFINAGH LETTER YAKH	tifinagh
ⵆ	-	x	χ̇	χ	k x	kh x	خ	fricative	touareg	yax	ⵢⴰⵆ	U+2D46: TIFINAGH LETTER TUAREG YAKH	tifinagh
ⵃ		h	ħ	ħ	h	ḥ	ح	fricative		yaḥ	ⵢⴰⵃ	U+2D43: TIFINAGH LETTER YAHH	tifinagh
ⵀ		h	h	h	h	h b	ھ ب	fricative		yah	ⵢⴰⵀ	U+2D40: TIFINAGH LETTER YAH	tifinagh
ⵁ	-	h	ḣ	h	h	h	ھ	fricative	Berber Academy	yah	ⵢⴰⵁ	U+2D41: TIFINAGH LETTER BERBER ACADEMY YAH	tifinagh
ⵂ	-	h	ḧ	h	h	h	ھ	fricative	touareg	yah	ⵢⴰⵂ	U+2D42: TIFINAGH LETTER TUAREG YAH	tifinagh
													
ⴲ		b	β	β	b	b	ٻ	fricative	extended	yab fricative	ⵢⴰⴲ	U+2D32: TIFINAGH LETTER YABH	tifinagh
ⵠ		v	v	v	v	v	ۋ	fricative	foreign sound	yav	ⵢⴰⵠ	U+2D60: TIFINAGH LETTER YAV	tifinagh
ⴸ		d	ð	ð	d	d	ذ	fricative	extended	yad fricative	ⵢⴰⴸ	U+2D38: TIFINAGH LETTER YADH	tifinagh
ⴺ		d	ðˁ	ðˁ	d	ḍ	ظ	fricative	extended	yaḍ fricative	ⵢⴰⴺ	U+2D3A: TIFINAGH LETTER YADDH	tifinagh
ⵣ		z	z	z	z	z	ز	fricative		yaz	ⵢⴰⵣ	U+2D63: TIFINAGH LETTER YAZ	tifinagh
ⵤ	-	z	ż	z	z	z	ز	fricative	tawellemet	yaz	ⵢⴰⵤ	U+2D64: TIFINAGH LETTER TAWELLEMET YAZ	tifinagh
ⵥ		z	zˁ	zˁ	z	ẓ dz	ژ	fricative		yaẓ	ⵢⴰⵥ	U+2D65: TIFINAGH LETTER YAZZ	tifinagh
ⵊ		z	ʒ	ʒ	j	j	ج	fricative		yaj	ⵢⴰⵊ	U+2D4A: TIFINAGH LETTER YAZH	tifinagh
ⵋ	-	z	ʒ̇	ʒ	j	j	ج	fricative	ahaggar	yaj	ⵢⴰⵋ	U+2D4B: TIFINAGH LETTER AHAGGAR YAZH	tifinagh
ⵌ	-	z	ʒ̈	ʒ	j	ẓ dz	ژ	fricative	touareg	yaj	ⵢⴰⵌ	U+2D4C: TIFINAGH LETTER TUAREG YAZH	tifinagh
ⴴ		j	ʝ	ʝ	g	g	ڲ	fricative	extended	yag fricative	ⵢⴰⴴ	U+2D34: TIFINAGH LETTER YAGHH	tifinagh
ⵖ		r	ʁ	ʁ ɣ	r	ɣ gh	غ	fricative		yaγ	ⵢⴰⵖ	U+2D56: TIFINAGH LETTER YAGH	tifinagh
ⵗ	-	r	ʁ̇	ʁ	g y	gh γ	غ	fricative	touareg	yay	ⵢⴰⵗ	U+2D57: TIFINAGH LETTER TUAREG YAGH	tifinagh
ⵘ	-	r	ʁ̈	ʁ	g y	gh γ j	غ ج	fricative	aïr	yaγ	ⵢⴰⵘ	U+2D58: TIFINAGH LETTER AYER YAGH	tifinagh
ⵄ		{	ʕ	ʕ	e	' ɛ	ع	fricative		yaε	ⵢⴰⵄ	U+2D44: TIFINAGH LETTER YAA	tifinagh
													
													
ⵎ		m	m	m	m	m	م	nasal		yam	ⵢⴰⵎ	U+2D4E: TIFINAGH LETTER YAM	tifinagh
ⵏ		n	n	n	n	n	ن	nasal		yan	ⵢⴰⵏ	U+2D4F: TIFINAGH LETTER YAN	tifinagh
ⵐ	-	n	ɲ	ɲ	n	ny	ني	nasal	touareg	yagn	ⵢⴰⵐ	U+2D50: TIFINAGH LETTER TUAREG YAGN	tifinagh
ⵑ	-	n	ŋ	ŋ	n	ng	ڭ	nasal	touareg	yang	ⵢⴰⵑ	U+2D51: TIFINAGH LETTER TUAREG YANG	tifinagh
													
													
ⵡ		w	w	w	w	w	ۉ	approximant		yaw	ⵢⴰⵡ	U+2D61: TIFINAGH LETTER YAW	tifinagh
ⵔ		r	r	r rˤ	r	r	ر	trill/flap		yar	ⵢⴰⵔ	U+2D54: TIFINAGH LETTER YAR	tifinagh
ⵕ		r	rˤ	rˤ	r	ṛ	ڕ	approximant		yaṛ	ⵢⴰⵕ	U+2D55: TIFINAGH LETTER YARR	tifinagh
ⵍ		l	l	l ɫ	l	l	ل	approximant		yal	ⵢⴰⵍ	U+2D4D: TIFINAGH LETTER YAL	tifinagh
ⵢ		j	y	j	y	y	ي	approximant		yay	ⵢⴰⵢ	U+2D62: TIFINAGH LETTER YAY	tifinagh
													
													
													
ⵉ		i	i	i	i	i	ي	vowel		yi	ⵢⵉ	U+2D49: TIFINAGH LETTER YI	tifinagh
ⵓ		u	ʊ	ʊ	u	u w	و ۉ	vowel		yu	ⵢⵓ	U+2D53: TIFINAGH LETTER YU	tifinagh
													
ⴻ		e	ə	ə	e	e	ه	vowel		yey	ⵢⴻⵢ	U+2D3B: TIFINAGH LETTER YEY	tifinagh
ⵦ	-	e	ė	eː	e	e		vowel	touareg	ye		U+2D66: TIFINAGH LETTER YE	tifinagh
ⵧ	-	o	o	oː	o	o		vowel	touareg	yo		U+2D67: TIFINAGH LETTER YO	tifinagh
													
ⴰ		a	a	æ	a	a	ا‬	vowel		ya	ⵢⴰ	U+2D30: TIFINAGH LETTER YA	tifinagh
													
													
ⵯ		w	ʷ	ʷ	w	ʷ	ٗ	labiovelarisation mark		tamatart	ⵜⴰⵎⴰⵜⴰⵔⵜ	U+2D6F: TIFINAGH MODIFIER LETTER LABIALIZATION MARK	tifinagh
													
													
⵰	-	|	 ¶		.	 • 		phrase separator	west africa	tazarast	ⵜⴰⵣⴰⵔⴰⵙⵜ	U+2D70: TIFINAGH SEPARATOR MARK	tifinagh
													
													
⵿	-	*	͓					consonant joiner	touareg			U+2D7F: TIFINAGH CONSONANT JOINER​	tifinagh
													
													
													
													
													
													
̇	-		˙					diacritic	infrequent notation form			U+0307: COMBINING DOT ABOVE​	
̉	-		ʼ					diacritic	infrequent notation form			U+0309: COMBINING HOOK ABOVE​	
̂	-		ˆ					diacritic	infrequent notation form			U+0302: COMBINING CIRCUMFLEX ACCENT​	
̄	-		ˉ					diacritic	infrequent notation form			U+0304: COMBINING MACRON​	
													
													
\u200C		=	ₓ		=	ₓ		zwnj				U+200C: ZERO WIDTH NON-JOINER	punctuation
\u200D		=	₊		=	₊		zwj				U+200D: ZERO WIDTH JOINER	punctuation
													
													
													
													
													
ⵅⵯ	s		xʷ	xʷ				labiovelar consonant	regional	yakhw	ⵢⴰⵅⵯ	U+2D45 U+2D6F: TIFINAGH LETTER YAKH, MODIFIER LETTER LABIALIZATION MARK	
ⵇⵯ	s		qʷ	qʷ				labiovelar consonant	regional	yaqw	ⵢⴰⵇⵯ	U+2D47 U+2D6F: TIFINAGH LETTER YAQ, MODIFIER LETTER LABIALIZATION MARK	
ⵖⵯ	s		ɣʷ	ɣʷ				labiovelar consonant	regional	yaghw	ⵢⴰⵖⵯ	U+2D56 U+2D6F: TIFINAGH LETTER YAGH, MODIFIER LETTER LABIALIZATION MARK	



`




var cols = {
"class": 1,
"key":2,
"transLoc": 3,
"ipaLoc": 4,
"transckey": 5,
"transcription":6,
"typeLoc": 8,
"statusLoc": 9,
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
"nameLoc": 10,
"nnameLoc": 11,
"ucsName": 12,
"block": 13,

"othertranscriptions": [[6, 'Berber Latin'],[7, 'Arabic']]
}
