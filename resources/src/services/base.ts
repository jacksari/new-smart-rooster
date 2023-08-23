import ky from "ky"

import config from "../config"

const base = ky.create({
	prefixUrl: config.API_URL,
})

export default base
