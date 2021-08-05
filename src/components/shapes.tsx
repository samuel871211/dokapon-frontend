import * as joint from 'jointjs'

const SVG = {
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
}

const battleField = joint.shapes.standard.Circle.define('battleField', {
	size: {
		width: 80,
		height: 80
	},
	attrs: {
		body: {
			fill: '#eee',
			strokeWidth: 3
		}
	}
})
const a = new battleField()
// a.attributes.top

const magicField = joint.dia.Element.define('magicField', {
	markup: [{
		selector: 'body',
		tagName: 'image'
	}],
	size: {
		width: 80,
		height: 80
	},
	attrs: {
		body: {
			width: 80,
			height: 80,
			href: 'data:image/svg+xml;utf8,' + encodeURIComponent(SVG.magicField)
		}
	}
})

const treasureField = joint.dia.Element.define('treasureField', {
	markup: [{
		selector: 'body',
		tagName: 'image'
	}],
	size: {
		width: 80,
		height: 80
	},
	attrs: {
		body: {
			width: 80,
			height: 80,
			href: 'data:image/svg+xml;utf8,' + encodeURIComponent(SVG.treasureField)
		}
	}
})

const oneWayHLink = joint.shapes.standard.Link.define('oneWayHLink', {
	attrs: {
        line: {
            stroke: 'white',
            strokeWidth: 4,
            targetMarker: {
            	d: 'M -5 0 L 10 10 L 10 -10 Z'
            }
        }
    }
})

const twoWayHLink = joint.shapes.standard.Link.define('twoWayHLink', {
	attrs: {
        line: {
            stroke: 'white',
            strokeWidth: 4,
            targetMarker: 'none'
        }
    }
})

const oneWayVLink = joint.shapes.standard.Link.define('oneWayVLink', {
	attrs: {
        line: {
            stroke: 'white',
            strokeWidth: 4,
            targetMarker: {
            	d: 'M -5 0 L 10 10 L 10 -10 Z'
            }
        }
    }
})

const twoWayVLink = joint.shapes.standard.Link.define('twoWayVLink', {
	attrs: {
        line: {
            stroke: 'white',
            strokeWidth: 4,
            targetMarker: 'none'
        }
    }
})

// interface HLink extends joint.dia.Link {
// 	left: joint.dia.Element | undefined
// 	right: joint.dia.Element | undefined
// }

// interface VLink extends joint.dia.Link {
// 	top: joint.dia.Element | undefined
// 	bottom: joint.dia.Element | undefined
// }

export function createElement (type: string): joint.dia.Element {
	switch (type.toLowerCase()) {
    case 'battlefield':
        return new battleField()
    case 'magicfield':
        return new magicField()
    case 'treasurefield':
        return new treasureField()
    default:
        return new battleField()
	}
}

export function createLink (type: string): joint.dia.Link {
	switch (type.toLowerCase()) {
    case 'onewayhlink':
        return new oneWayHLink()
    case 'twowayhlink':
        return new twoWayHLink()
    case 'onewayvlink':
        return new oneWayVLink()
    case 'twowayvlink':
        return new twoWayVLink()
    default:
        return new oneWayHLink()
	}
}

export const ELEMENTS: Array<string> = [
    'battleField', 'magicField', 'treasureField'
]

export const LINKS: Array<string> = [
    'oneWayHLink', 'twoWayHLink',
    'oneWayVLink', 'twoWayVLink'
]