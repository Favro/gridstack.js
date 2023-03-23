const path = require("path");
const fs = require("fs");

const pathToDefinitions = "dist";

function wrapFile(path) {
	let content = fs.readFileSync(path, "utf-8");

	// Remove declares
	content = content.replace(/declare /g, "");

	// Comment out imports
	content = content.replace(/^import/gm, "// import");

	// Comment out re-exports
	content = content.replace(/^export \*/gm, "// export");

	fs.writeFileSync(path, `declare module GridStack {\n${content}\n}\n`);

	console.log(`Wrapped ${path}`);
}

let files = fs.readdirSync(pathToDefinitions);

for (let file of files) {
	if (file.endsWith("d.ts"))
		wrapFile(path.join(pathToDefinitions, file));
}