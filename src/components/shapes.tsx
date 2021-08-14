import * as joint from 'jointjs'

// svg畫布大小是60px，但包成image之後可以再透過jointjs自由調整大小
// In the SVG specification version 1.1,
// the rendering order is based on the document order.
// conclusion: no need to specify z-index.

export const SVG: { [key: string]: string } = {
	battleField:
		'<?xml version="1.0" standalone="no"?>' +
		'<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1">' +
		'<g>' +
		'<circle fill="#eee" strokeWidth="3" stroke="#333333" cx="30" cy="30" r="30"></circle>' +
		'</g>' +
		'</svg>',
	magicField:
		'<?xml version="1.0" standalone="no"?>' +
		'<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1">' +
		'<g>' +
		'<ellipse stroke-width="2" ry="29" rx="29" cy="30.12519" cx="30" stroke="#333333" fill="#7466d1"/>' +
		'<rect height="36.74913" width="30.12429" y="9.0005" x="14.93786" stroke="#333333" fill="#7466d1"/>' +
		'<rect height="6.99983" width="14.12467" y="16.09889" x="22.93767" stroke-width="0" fill="#ffffff"/>' +
		'<line stroke="#333333" y2="49.57106" x2="18.62018" y1="45.63659" x1="14.81072" fill="none"/>' +
		'<line y2="49.69997" x2="48.06064" y1="11.69901" x1="48.06064" stroke="#333333" fill="none"/>' +
		'<line stroke="#333333" y2="12.13355" x2="48.30769" y1="8.82408" x1="44.99823" fill="none"/>' +
		'<line y2="49.35002" x2="48.50104" y1="49.35002" x1="18.375" stroke="#333333" fill="none"/>' +
		'<rect stroke="#333333" stroke-width="0" height="2.49997" width="29.06221" y="46.28675" x="18.43761" fill="#ffffff"/>' +
		'<rect height="34.75" width="2" y="11.975" x="45.5" stroke-width="0" fill="#ffffff"/>' +
		'<path stroke="#ffffff" stroke-width="0" d="m45.5275,11.99169l0,-2.125l2,2.125l-2,0z" fill="#ffffff"/>' +
		'<path transform="rotate(180 17.2575 47.552)" stroke-width="0" d="m16.07,48.86449l0,-2.625l2.375,2.625l-2.375,0z" fill="#ffffff"/>' +
		'</g>' +
		'</svg>',
	treasureField:
		'<?xml version="1.0" standalone="no"?>' +
		'<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1">' +
		'<g>' +
		'<ellipse stroke-width="2" ry="29" rx="29" cy="30" cx="30" stroke="#333333" fill="#975102"/>' +
		'<ellipse stroke="#333333" ry="21.625" rx="20.6875" cy="33.825" cx="30" fill="#975102"/>' +
		'<ellipse stroke="#333333" ry="9" rx="17.75" cy="16.575" cx="30" fill="#975102"/>' +
		'<text style="cursor: move;" font-style="normal" font-weight="normal" xml:space="preserve" text-anchor="start" font-family="Microsoft JhengHei" font-size="24" stroke-width="0" y="47.95" x="18" fill="#000000">福</text>' +
		'<path d="m61.94375,13.71692l0.56913,0l0.17587,-0.54067l0.17587,0.54067l0.56913,0l-0.46044,0.33415l0.17588,0.54067l-0.46044,-0.33416l-0.46044,0.33416l0.17588,-0.54067l-0.46044,-0.33415z" stroke="#333333" fill="#975102"/>' +
		'<ellipse stroke="#333333" ry="7.0625" rx="15.5625" cy="16.6375" cx="30" fill="#975102"/>' +
		'</g>' +
		'</svg>',
	specialField:
		'<?xml version="1.0" standalone="no"?>' +
		'<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1">' +
		'<g>' +
		'<circle fill="#4089d8" strokeWidth="3" stroke="#333333" cx="30" cy="30" r="30"></circle>' +
		'</g>' +
		'</svg>',
	collectMoneyField:
		'<?xml version="1.0" standalone="no"?>' +
		'<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1">' +
		'<g>' +
		'<ellipse ry="8.25" rx="8.25" cy="9" cx="51" stroke="#000000" fill="#000000"/>' +
		'<ellipse ry="8.25" rx="8.25" cy="9" cx="9" stroke="#000000" fill="#000000"/>' +
		'<ellipse ry="8.25" rx="8.25" cy="51" cx="9" stroke="#000000" fill="#000000"/>' +
		'<ellipse ry="8.25" rx="8.25" cy="51" cx="51" stroke="#000000" fill="#000000"/>' +
		'<ellipse ry="29" rx="29" cy="30" cx="30" stroke="#333333" fill="#4a91dc"/>' +
		'<ellipse ry="18" rx="18" cy="30" cx="30" stroke="#000000" fill="#4a91dc"/>' +
		'</g>' +
		'</svg>',
	collectAllMoneyField:
		'<?xml version="1.0" standalone="no"?>' +
		'<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1">' +
		'<g>' +
		'<ellipse ry="8.25" rx="8.25" cy="9" cx="51" stroke="#000000" fill="#000000"/>' +
		'<ellipse ry="8.25" rx="8.25" cy="9" cx="9" stroke="#000000" fill="#000000"/>' +
		'<ellipse ry="8.25" rx="8.25" cy="51" cx="9" stroke="#000000" fill="#000000"/>' +
		'<ellipse ry="8.25" rx="8.25" cy="51" cx="51" stroke="#000000" fill="#000000"/>' +
		'<ellipse ry="29" rx="29" cy="30" cx="30" stroke="#333333" fill="#fff953"/>' +
		'<ellipse ry="18" rx="18" cy="30" cx="30" stroke="#000000" fill="#fff953"/>' +
		'</g>' +
		'</svg>',
	goldTreasureField:
		'<?xml version="1.0" standalone="no"?>' +
		'<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1">' +
		'<g>' +
		'<ellipse fill="#fbfe40" stroke="#333333" cx="30" cy="30" rx="29" ry="29"/>' +
		'<path d="m18,10s-23,18 -5,40" stroke="#6a3816" fill="none"/>' +
		'<path d="m40,12s-23,18 -5,40" stroke="#6a3816" fill="none"/>' +
		'<path d="m40,12s22,18 3,38" stroke="#6a3816" fill="none"/>' +
		'<line stroke="#6a3816" y2="12.14773" x2="40.40937" y1="10.02273" x1="17.65937" fill="none"/>' +
		'<line stroke="#6a3816" y2="51.83523" x2="35.15937" y1="49.77273" x1="12.59687" fill="none"/>' +
		'<line stroke="#6a3816" y2="49.77273" x2="43.34687" y1="51.89773" x1="34.78437" fill="none"/>' +
		'<line stroke="#6a3816" y2="35.02273" x2="27.90937" y1="32.96627" x1="6.59687" fill="none"/>' +
		'<line stroke="#6a3816" y2="33.70611" x2="50.90937" y1="35.14773" x1="27.97188" fill="none"/>' +
		'<line stroke="#6a3816" y2="33.42409" x2="13.21178" y1="40.01655" x1="13.21178" fill="none"/>' +
		'<line stroke="#6a3816" y2="34.39631" x2="23.3185" y1="40.20487" x1="23.3185" fill="none"/>' +
		'<line stroke="#6a3816" y2="39.70268" x2="23.32147" y1="39.70268" x1="12.70958" fill="none"/>' +
		'</g>' +
		'</svg>',
	redTreasureField:
		'<?xml version="1.0" standalone="no"?>' +
		'<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1">' +
		'<g>' +
		'<ellipse fill="#f8312e" stroke="#333333" cx="30" cy="30" rx="29" ry="29"/>' +
		'<path d="m18,10s-23,18 -5,40" stroke="#6a3816" fill="none"/>' +
		'<path d="m40,12s-23,18 -5,40" stroke="#6a3816" fill="none"/>' +
		'<path d="m40,12s22,18 3,38" stroke="#6a3816" fill="none"/>' +
		'<line stroke="#6a3816" y2="12.14773" x2="40.40937" y1="10.02273" x1="17.65937" fill="none"/>' +
		'<line stroke="#6a3816" y2="51.83523" x2="35.15937" y1="49.77273" x1="12.59687" fill="none"/>' +
		'<line stroke="#6a3816" y2="49.77273" x2="43.34687" y1="51.89773" x1="34.78437" fill="none"/>' +
		'<line stroke="#6a3816" y2="35.02273" x2="27.90937" y1="32.96627" x1="6.59687" fill="none"/>' +
		'<line stroke="#6a3816" y2="33.70611" x2="50.90937" y1="35.14773" x1="27.97188" fill="none"/>' +
		'<line stroke="#6a3816" y2="33.42409" x2="13.21178" y1="40.01655" x1="13.21178" fill="none"/>' +
		'<line stroke="#6a3816" y2="34.39631" x2="23.3185" y1="40.20487" x1="23.3185" fill="none"/>' +
		'<line stroke="#6a3816" y2="39.70268" x2="23.32147" y1="39.70268" x1="12.70958" fill="none"/>' +
		'</g>' +
		'</svg>',
	whiteTreasureField:
		'<?xml version="1.0" standalone="no"?>' +
		'<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1">' +
		'<g>' +
		'<ellipse fill="#f4e7fd" stroke="#333333" cx="30" cy="30" rx="29" ry="29"/>' +
		'<path d="m18,10s-23,18 -5,40" stroke="#6a3816" fill="none"/>' +
		'<path d="m40,12s-23,18 -5,40" stroke="#6a3816" fill="none"/>' +
		'<path d="m40,12s22,18 3,38" stroke="#6a3816" fill="none"/>' +
		'<line stroke="#6a3816" y2="12.14773" x2="40.40937" y1="10.02273" x1="17.65937" fill="none"/>' +
		'<line stroke="#6a3816" y2="51.83523" x2="35.15937" y1="49.77273" x1="12.59687" fill="none"/>' +
		'<line stroke="#6a3816" y2="49.77273" x2="43.34687" y1="51.89773" x1="34.78437" fill="none"/>' +
		'<line stroke="#6a3816" y2="35.02273" x2="27.90937" y1="32.96627" x1="6.59687" fill="none"/>' +
		'<line stroke="#6a3816" y2="33.70611" x2="50.90937" y1="35.14773" x1="27.97188" fill="none"/>' +
		'<line stroke="#6a3816" y2="33.42409" x2="13.21178" y1="40.01655" x1="13.21178" fill="none"/>' +
		'<line stroke="#6a3816" y2="34.39631" x2="23.3185" y1="40.20487" x1="23.3185" fill="none"/>' +
		'<line stroke="#6a3816" y2="39.70268" x2="23.32147" y1="39.70268" x1="12.70958" fill="none"/>' +
		'</g>' +
		'</svg>',
	keyTreasureField:
		'<?xml version="1.0" standalone="no"?>' +
		'<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1">' +
		'<g>' +
		'<ellipse ry="29" rx="29" cy="30" cx="30" opacity="NaN" stroke="#333333" fill="#c68c48"/>' +
		'<path fill="#a7a7bb" opacity="NaN" d="m4.3125,30l11.00893,-22.01785l29.35715,0l11.00893,22.01785l-11.00893,22.01785l-29.35715,0l-11.00893,-22.01785z" stroke="#2f0205" transform="rotate(90 30 30)"/>' +
		'<line fill="none" x1="8.25" y1="15.19318" x2="30" y2="24.19319" stroke="#2f0205"/>' +
		'<line fill="none" stroke="#2f0205" x1="30" y1="24.25" x2="52" y2="15.25"/>' +
		'<line fill="none" stroke="#2f0205" x1="29.875" y1="24.19319" x2="29.875" y2="55.19949"/>' +
		'<line fill="none" x1="8" y1="24.69319" x2="29.75" y2="33.69319" stroke="#2f0205"/>' +
		'<line fill="none" stroke="#2f0205" x1="30" y1="33.625" x2="52" y2="24.625"/>' +
		'<line fill="none" x1="23.75" y1="31.31819" x2="23.75" y2="39.56915" stroke="#2f0205"/>' +
		'<line fill="none" stroke="#2f0205" x1="12.5" y1="26.94319" x2="12.5" y2="35.06915"/>' +
		'<line fill="none" x1="7.875" y1="32.88064" x2="29.625" y2="41.88064" stroke="#2f0205"/>' +
		'<path fill="none" stroke="#2f0205" d="m19.07366,33.07848l0.00164,-0.00109l-0.10539,-0.16572c0.30055,-0.40449 0.34089,-0.96653 0.05451,-1.41737c-0.37124,-0.58385 -1.14534,-0.75611 -1.72919,-0.38487c-0.58366,0.37106 -0.75647,1.14516 -0.38523,1.72937c0.27766,0.43648 0.78137,0.64272 1.26182,0.56368l0.07705,0.12157l0.03743,0.00818l0.14155,-0.08123l-0.05542,0.25022l0.45119,0.10031l-0.05379,0.24077l0.3458,0.07705l-0.12357,0.55604l0.25549,0.05688l-0.07705,0.34635l0.75139,0.16681l0.13774,-0.61637l-0.98598,-1.55056l0.00001,-0.00002zm-1.34286,-1.28381c-0.12447,0.07923 -0.28947,0.04234 -0.3687,-0.08213c-0.07905,-0.12447 -0.04252,-0.28965 0.08195,-0.3687s0.28965,-0.04234 0.36852,0.08213c0.07941,0.12447 0.04252,0.28965 -0.08177,0.3687z"/>' +
		'</g>' +
		'</svg>'

}

const battleField = joint.dia.Element.define('dokapon.battleField', {
	name: 'battleField',
	markup: [{
		selector: 'body',
		tagName: 'image',
		attributes: {
			width: 80,
			height: 80,
			href: 'data:image/svg+xml;utf8,' + encodeURIComponent(SVG.battleField)
		}
	}],
	size: {
		width: 80,
		height: 80
	}
})

const magicField = joint.dia.Element.define('dokapon.magicField', {
	name: 'magicField',
	markup: [{
		selector: 'body',
		tagName: 'image',
		attributes: {
			width: 80,
			height: 80,
			href: 'data:image/svg+xml;utf8,' + encodeURIComponent(SVG.magicField)
		}
	}],
	size: {
		width: 80,
		height: 80
	}
})

const treasureField = joint.dia.Element.define('dokapon.treasureField', {
	name: 'treasureField',
	markup: [{
		selector: 'body',
		tagName: 'image',
		attributes: {
			width: 80,
			height: 80,
			href: 'data:image/svg+xml;utf8,' + encodeURIComponent(SVG.treasureField)
		}
	}],
	size: {
		width: 80,
		height: 80
	}
})

const specialField = joint.dia.Element.define('dokapon.specialField', {
	name: 'specialField',
	markup: [{
		selector: 'body',
		tagName: 'image',
		attributes: {
			width: 80,
			height: 80,
			href: 'data:image/svg+xml;utf8,' + encodeURIComponent(SVG.specialField)
		}
	}],
	size: {
		width: 80,
		height: 80
	}
})

const collectMoneyField = joint.dia.Element.define('dokapon.collectMoneyField', {
	name: 'collectMoneyField',
	markup: [{
		selector: 'body',
		tagName: 'image',
		attributes: {
			width: 80,
			height: 80,
			href: 'data:image/svg+xml;utf8,' + encodeURIComponent(SVG.collectMoneyField)
		}
	}],
	size: {
		width: 80,
		height: 80
	}
})

const collectAllMoneyField = joint.dia.Element.define('dokapon.collectAllMoneyField', {
	name: 'collectAllMoneyField',
	markup: [{
		selector: 'body',
		tagName: 'image',
		attributes: {
			width: 80,
			height: 80,
			href: 'data:image/svg+xml;utf8,' + encodeURIComponent(SVG.collectAllMoneyField)
		}
	}],
	size: {
		width: 80,
		height: 80
	}
})

const goldTreasureField = joint.dia.Element.define('dokapon.goldTreasureField', {
	name: 'goldTreasureField',
	markup: [{
		selector: 'body',
		tagName: 'image',
		attributes: {
			width: 80,
			height: 80,
			href: 'data:image/svg+xml;utf8,' + encodeURIComponent(SVG.goldTreasureField)
		}
	}],
	size: {
		width: 80,
		height: 80
	}
})

const redTreasureField = joint.dia.Element.define('dokapon.redTreasureField', {
	name: 'redTreasureField',
	markup: [{
		selector: 'body',
		tagName: 'image',
		attributes: {
			width: 80,
			height: 80,
			href: 'data:image/svg+xml;utf8,' + encodeURIComponent(SVG.redTreasureField)
		}
	}],
	size: {
		width: 80,
		height: 80
	}
})

const whiteTreasureField = joint.dia.Element.define('dokapon.whiteTreasureField', {
	name: 'whiteTreasureField',
	markup: [{
		selector: 'body',
		tagName: 'image',
		attributes: {
			width: 80,
			height: 80,
			href: 'data:image/svg+xml;utf8,' + encodeURIComponent(SVG.whiteTreasureField)
		}
	}],
	size: {
		width: 80,
		height: 80
	}
})

const keyTreasureField = joint.dia.Element.define('dokapon.keyTreasureField', {
	name: 'keyTreasureField',
	markup: [{
		selector: 'body',
		tagName: 'image',
		attributes: {
			width: 80,
			height: 80,
			href: 'data:image/svg+xml;utf8,' + encodeURIComponent(SVG.keyTreasureField)
		}
	}],
	size: {
		width: 80,
		height: 80
	}
})

// joint.shapes.standard.Link.define(): joint.dia.Link
// will cause error "markup required"
function oneWayHLink (): joint.shapes.standard.Link {
	const link = new joint.shapes.standard.Link()
	link.attr('line', {
		stroke: 'white',
		strokeWidth: 4,
		targetMarker: { d: 'M -5 0 L 10 10 L 10 -10 Z' }
	})
	link.prop('name', 'oneWayHLink')
	return link
}

function twoWayHLink (): joint.shapes.standard.Link {
	const link = new joint.shapes.standard.Link()
	link.attr('line', {
		stroke: 'white',
		strokeWidth: 4,
		targetMarker: 'none'
	})
	link.prop('name', 'twoWayHLink')
	return link
}

function oneWayVLink (): joint.shapes.standard.Link {
	const link = new joint.shapes.standard.Link()
	link.attr('line', {
		stroke: 'white',
		strokeWidth: 4,
		targetMarker: { d: 'M -5 0 L 10 10 L 10 -10 Z' }
	})
	link.prop('name', 'oneWayVLink')
	return link
}

function twoWayVLink (): joint.shapes.standard.Link {
	const link = new joint.shapes.standard.Link()
	link.attr('line', {
		stroke: 'white',
		strokeWidth: 4,
		targetMarker: 'none'
	})
	link.prop('name', 'twoWayVLink')
	return link
}

export function createElement (name: string): joint.dia.Element {
	switch (name.toLowerCase()) {
    case 'battlefield':
        return new battleField()
    case 'magicfield':
        return new magicField()
    case 'treasurefield':
        return new treasureField()
	case 'specialfield':
		return new specialField()
	case 'collectmoneyfield':
		return new collectMoneyField()
	case 'collectallmoneyfield':
		return new collectAllMoneyField()
	case 'goldtreasurefield':
		return new goldTreasureField()
	case 'redtreasurefield':
		return new redTreasureField()
	case 'whitetreasurefield':
		return new whiteTreasureField()
	case 'keytreasurefield':
		return new keyTreasureField()
    default:
		console.error(`unknown element name ${name}`)
        return new battleField()
	}
}

export function createLink (name: string): joint.dia.Link {
	switch (name.toLowerCase()) {
    case 'onewayhlink':
        return oneWayHLink()
    case 'twowayhlink':
        return twoWayHLink()
    case 'onewayvlink':
        return oneWayVLink()
    case 'twowayvlink':
        return twoWayVLink()
    default:
        return oneWayHLink()
	}
}

export const ELEMENTS: Array<string> = [
	'battleField', 'magicField',
	'treasureField', 'specialField',
	'collectMoneyField', 'collectAllMoneyField',
	'goldTreasureField', 'redTreasureField',
	'whiteTreasureField', 'keyTreasureField'
]

export const LINKS: Array<string> = [
	'oneWayHLink', 'twoWayHLink',
	'oneWayVLink', 'twoWayVLink'
]