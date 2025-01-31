var spreadsheet = `latn-wo	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	native name	latin name	ucs name	block
-	-			-	-				hyphen				U+2010: HYPHEN	
‑	-			‑	‑		Pd	?	non-breaking hyphen				U+2011: NON-BREAKING HYPHEN	
–	-			–	–		Pd	?	en dash				U+2013: EN DASH	
—	-			—	—		Pd	?	em dash				U+2014: EM DASH	
,	,			,	,		Po		comma				U+002C: COMMA	
;	;			;	;		Po		semicolon				U+003B: SEMICOLON	
:	:			:	:		Po		colon				U+003A: COLON	
!	!			!	!		Po		exclamation mark				U+0021: EXCLAMATION MARK	
?	?			?	?		Po		question mark				U+003F: QUESTION MARK	
.	.			.	.		Po		full stop				U+002E: FULL STOP	
…	.			…	…		Po	?	ellipsis				U+2026: HORIZONTAL ELLIPSIS	
(	(			(	(		Ps		parenthesis				U+0028: LEFT PARENTHESIS	
[	(			[	[		Ps	?	bracket				U+005B: LEFT SQUARE BRACKET	
)	)			)	)		Pe		parenthesis				U+0029: RIGHT PARENTHESIS	
]	)			]	]		Pe	?	bracket				U+005D: RIGHT SQUARE BRACKET	
%	%			%			Po	?	percentage mark				U+0025: PERCENT SIGN	
‰	%			‰			Po	?	per mille mark				U+2030: PER MILLE SIGN	
«	<			«			Pi	?	quotation mark				U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	
‹	<			‹			Pi	?	quotation mark				U+2018: LEFT SINGLE QUOTATION MARK	
“	<			“	“		Pi		quotation mark				U+201C: LEFT DOUBLE QUOTATION MARK	
‘	<			\‘	\‘				quotation mark				U+2018: LEFT SINGLE QUOTATION MARK	
»	>			»			Pf	?	quotation mark				U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	
›	>			›			Pf	?	quotation mark				U+2019: RIGHT SINGLE QUOTATION MARK	
”	>			”	”		Pf		quotation mark				U+201D: RIGHT DOUBLE QUOTATION MARK	
’	>			\’	\’				quotation mark				U+2019: RIGHT SINGLE QUOTATION MARK	
														
p	p	p		p			Ll		consonant				U+0070: LATIN SMALL LETTER P	✓
P	P	p		P			Lu		consonant				U+0050: LATIN CAPITAL LETTER P	
b	b	b	-p	b			Ll		consonant				U+0062: LATIN SMALL LETTER B	
B	B	b		B			Lu		consonant				U+0042: LATIN CAPITAL LETTER B	
mb		ᵐb		mb					prenasalised consonant				U+006D U+0062: LATIN SMALL LETTER M, SMALL LETTER B	
MB		ᵐb		MB					prenasalised consonant				U+004D U+0042: LATIN CAPITAL LETTER M, CAPITAL LETTER B	✓
t	t	t		t			Ll		consonant				U+0074: LATIN SMALL LETTER T	
T	T	t		T			Lu		consonant				U+0054: LATIN CAPITAL LETTER T	
d	d	d		d			Ll		consonant				U+0064: LATIN SMALL LETTER D	
D	D	d		D			Lu		consonant				U+0044: LATIN CAPITAL LETTER D	
nd	d	ⁿd		nd					prenasalised consonant				U+006E U+0064: LATIN SMALL LETTER N, SMALL LETTER D	
ND	D	ⁿd		ND					prenasalised consonant				U+004E U+0044: LATIN CAPITAL LETTER N, CAPITAL LETTER D	✓
c	c	c		c			Ll		consonant				U+0063: LATIN SMALL LETTER C	
C	C	c		C			Lu		consonant				U+0043: LATIN CAPITAL LETTER C	
j	j	ɟ	-c	j			Ll		consonant				U+006A: LATIN SMALL LETTER J	
J	J	ɟ		J			Lu		consonant				U+004A: LATIN CAPITAL LETTER J	
nj		ᶮɟ		nj					prenasalised consonant				U+006E U+006A: LATIN SMALL LETTER N, SMALL LETTER J	
NJ		ᶮɟ		NJ					prenasalised consonant				U+004E U+004A: LATIN CAPITAL LETTER N, CAPITAL LETTER J	
k	k	k		k			Ll		consonant				U+006B: LATIN SMALL LETTER K	
K	K	k		K			Lu		consonant				U+004B: LATIN CAPITAL LETTER K	✓
g	g	ɡ	-k	g			Ll		consonant				U+0067: LATIN SMALL LETTER G	
G	G	ɡ		G			Lu		consonant				U+0047: LATIN CAPITAL LETTER G	
ng		ᵑɡ		ng					prenasalised consonant				U+006E U+0067: LATIN SMALL LETTER N, SMALL LETTER G	
NG		ᵑɡ		NG					prenasalised consonant				U+004E U+0047: LATIN CAPITAL LETTER N, CAPITAL LETTER G	
q	q	q		q			Ll		consonant				U+0071: LATIN SMALL LETTER Q	
Q	Q	q		Q			Lu		consonant				U+0051: LATIN CAPITAL LETTER Q	
f	f	f		f			Ll		consonant				U+0066: LATIN SMALL LETTER F	
F	F	ɸ		F			Lu		consonant				U+0046: LATIN CAPITAL LETTER F	
s	s	s		s			Ll		consonant				U+0073: LATIN SMALL LETTER S	
S	s	s		S			Lu		consonant				U+0053: LATIN CAPITAL LETTER S	
z	z	z		z			Ll	?	consonant				U+007A: LATIN SMALL LETTER Z	
Z	Z	z		Z			Lu	?	consonant				U+005A: LATIN CAPITAL LETTER Z	
x	x	x χ		x			Ll		consonant				U+0078: LATIN SMALL LETTER X	
X	X	x χ		X			Lu		consonant				U+0058: LATIN CAPITAL LETTER X	
m	m	m		m			Ll		consonant				U+006D: LATIN SMALL LETTER M	
M	M	m		M			Lu		consonant				U+004D: LATIN CAPITAL LETTER M	
n	n	n		n			Ll		consonant				U+006E: LATIN SMALL LETTER N	
N	N	n		N			Lu		consonant				U+004E: LATIN CAPITAL LETTER N	
ñ	n	ɲ		ñ			Ll		consonant				U+00F1: LATIN SMALL LETTER N WITH TILDE	
Ñ	N	ɲ		Ñ			Lu		consonant				U+00D1: LATIN CAPITAL LETTER N WITH TILDE	
ŋ	n	ŋ		ŋ			Ll		consonant				U+014B: LATIN SMALL LETTER ENG	
Ŋ	N	ŋ		Ŋ			Lu		consonant				U+014A: LATIN CAPITAL LETTER ENG	
w	w	w		w			Ll		consonant				U+0077: LATIN SMALL LETTER W	
W	W	w		W			Lu		consonant				U+0057: LATIN CAPITAL LETTER W	
r	r	r		r			Ll		consonant				U+0072: LATIN SMALL LETTER R	
R	R	r		R			Lu		consonant				U+0052: LATIN CAPITAL LETTER R	
l	l	l		l			Ll		consonant				U+006C: LATIN SMALL LETTER L	
L	L	l		L			Lu		consonant				U+004C: LATIN CAPITAL LETTER L	
y	y	j		y			Ll		consonant				U+0079: LATIN SMALL LETTER Y	
Y	y	j		Y			Lu		consonant				U+0059: LATIN CAPITAL LETTER Y	
														
i	i	i		i			Ll		vowel				U+0069: LATIN SMALL LETTER I	
I	I	i		I			Lu		vowel				U+0049: LATIN CAPITAL LETTER I	
ii		iː		ii					long vowel				U+0069 U+0069: LATIN SMALL LETTER I, SMALL LETTER I	
u	u	u		u			Ll		vowel				U+0075: LATIN SMALL LETTER U	
U	U	u uː		U			Lu		vowel				U+0055: LATIN CAPITAL LETTER U	
uu	u	uː		uu					long vowel				U+0075 U+0075: LATIN SMALL LETTER U, SMALL LETTER U	
e	e	ɛ		ɛ			Ll		vowel				U+0065: LATIN SMALL LETTER E	
E	E	e eː		E			Lu		vowel				U+0045: LATIN CAPITAL LETTER E	
ee		ɛː		ɛɛ					long vowel				U+0065 U+0065: LATIN SMALL LETTER E, SMALL LETTER E	
é	e	e		e			Ll		vowel				U+00E9: LATIN SMALL LETTER E WITH ACUTE	
É	E	e		É			Lu		vowel				U+00C9: LATIN CAPITAL LETTER E WITH ACUTE	
éé		eː		ee					long vowel				U+00E9 U+00E9: LATIN SMALL LETTER E WITH ACUTE, SMALL LETTER E WITH ACUTE	
o	o	ɔ		ɔ			Ll		vowel				U+006F: LATIN SMALL LETTER O	
O	O	o oː		O			Lu		vowel				U+004F: LATIN CAPITAL LETTER O	
oo		ɔː		ɔɔ					long vowel				U+006F U+006F: LATIN SMALL LETTER O, SMALL LETTER O	
ó	o	o		o			Ll		vowel				U+00F3: LATIN SMALL LETTER O WITH ACUTE	
Ó	O	o		Ó			Lu		vowel				U+00D3: LATIN CAPITAL LETTER O WITH ACUTE	
óó		oː		oo					long vowel				U+00F3 U+00F3: LATIN SMALL LETTER O WITH ACUTE, SMALL LETTER O WITH ACUTE	
ë	e	ə		ə			Ll		vowel				U+00EB: LATIN SMALL LETTER E WITH DIAERESIS	
Ë	E	ə		Ë			Lu		vowel				U+00CB: LATIN CAPITAL LETTER E WITH DIAERESIS	
ëë		əː		əə					long vowel				U+00EB U+00EB: LATIN SMALL LETTER E WITH DIAERESIS, SMALL LETTER E WITH DIAERESIS	
a	a	a		a			Ll		vowel				U+0061: LATIN SMALL LETTER A	
A	A	a aː		A			Lu		vowel				U+0041: LATIN CAPITAL LETTER A	
aa		aː		aa					long vowel				U+0061 U+0061: LATIN SMALL LETTER A, SMALL LETTER A	
à	a	aː		à			Ll		long vowel	Used before long consonants.			U+00E0: LATIN SMALL LETTER A WITH GRAVE	
À	A	aː		À			Lu		long vowel	Used before long consonants.			U+00C0 LATIN CAPITAL LETTER A WITH GRAVE	
														
§				§	§		Po	?	section sign				U+00A7: SECTION SIGN	
†				†	†		Po	?	dagger				U+2020: DAGGER	
‡				‡	‡		Po	?	double dagger				U+2021: DOUBLE DAGGER	
′				′	′		Po	?	prime				U+2032: PRIME	
″				″	″		Po	?	double prime				U+2033: DOUBLE PRIME	
														
́				ˊ			Mn​	r	combining mark	Only in decomposed é or ó.			U+0301: COMBINING ACUTE ACCENT	
̀				ˋ			Mn​	r	combining mark	Only in decomposed à.			U+0300: COMBINING GRAVE ACCENT	
̃				˜			Mn​	r	combining mark	Only in decomposed ñ.			U+0303: COMBINING TILDE	
̈				̈			Mn​	r	combining mark	Only in decomposed ë.			U+0308 COMBINING DIAERESIS	
`														
														
latinPanel = 'aː eː iː oː uː ŋ ɔ ɔː ə əː ᵊ ɛ ɛː ɟ ɡ ɲ ɸ ɽ ɾ χ ᵐb ᵑɡ ᶮɟ ⁿd ʔ'														
														
var cols = {														
key: 1,														
ipaLoc: 2,														
ipaPlus: 3,														
transLoc: 4,														
transcription: 5,														
kbd: 6,														
class: 7,														
status: 8,														
typeLoc: 9,														
statusLoc: 10,														
														
nnameLoc: 11,														
nameLoc: 12,														
ucsName: 13,														
block: 14,														
														
//othertranscriptions: [[5, 'LOC']]														
}														