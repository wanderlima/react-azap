module.exports = {
	verbose: true,
	setupFiles: [
		"./utils/jest.setup.js"
	],
	"snapshotSerializers": ["enzyme-to-json/serializer"]
};
