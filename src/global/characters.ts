import * as joint from 'jointjs'
// import redNoJob from '../imgs/redNoJob.png'
// TODO: 職業 * 顏色 * 性別，這邊會有多少排列組合？是否需要mapping table對應到圖片？

const noJob = joint.dia.Element.define('dokapon.noJob', {
	job: 'noJob',
	markup: [{
		selector: 'body',
		tagName: 'image',
		attributes: {
			width: 148,
			height: 125,
			// href: redNoJob
		}
	}],
	size: {
		width: 148,
		height: 125
	}
})

export function createCharacter (options: {
    job: string,
    gender: string,
    color: string
}): joint.dia.Element {
    return new noJob()
}