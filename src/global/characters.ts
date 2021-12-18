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

export const basicJobs = {
	warrior: {
		chinese: '戰士',
		chineseIntro: '是攻擊力很強的工作。\n雖然擅長物理攻擊，\n魔力不會上升，所以對魔法抵抗力很弱。'
	},
	magician: {
		chinese: '魔法師',
		chineseIntro: '是靠強大的魔力去磨蹭的職業。\n雖然魔法攻擊很強\n防禦力沒有提高，所以被打得軟弱。'
	},
	cleric: {
		chinese: '僧侶',
		chineseIntro: 'HP從事高職業。\n雖然有被打的強度，但是\n因爲速度不快，所以很短。'
	},
	thief: {
		chinese: '盜賊',
		chineseIntro: '敏捷是皮凱奇的職業。\n雖然能迅速躲避攻擊，\n沒有其他特別的特徵。'
	},
	beginner: {
		chinese: '無職',
		chineseIntro: '是不適合職業的自由人。\n沒有任何好處，也沒有工資，\n生活很艱難。'
	}
}

export const colors = {
	red: {
		chinese: '紅色',
		rgb: 'rgb(243,44,43)'
	},
	orange: {
		chinese: '橘色',
		rgb: 'rgb(254,152,57)'
	},
	yellow: {
		chinese: '黃色',
		rgb: 'rgb(254,246,56)'
	},
	lightGreen: {
		chinese: '淺綠色',
		rgb: 'rgb(100,248,29)'
	},
	darkGreen: {
		chinese: '深綠色',
		rgb: 'rgb(16,203,122)'
	},
	lightBlue: {
		chinese: '淺藍色',
		rgb: 'rgb(79,213,255)'
	},
	darkBlue: {
		chinese: '深藍色',
		rgb: 'rgb(115,125,230)'
	},
	pink: {
		chinese: '粉紅色',
		rgb: 'rgb(255,102,244)'
	},
	gray: {
		chinese: '灰色',
		rgb: 'rgb(98,93,120)'
	},
	white: {
		chinese: '白色',
		rgb: 'rgb(255,255,255)'
	}
}