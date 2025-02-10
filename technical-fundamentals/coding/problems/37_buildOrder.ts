// 7. *Build Order*:

// You are given a list of projects and a list of dependencies
// (which is a list of pairs of projects, where the second project is
// dependent on the first project). All of a project's dependencies
// must be built before the project is. Find a build order that will allow
// the projects to be built. If there is no valid build order, return an error.

// ```
// EXAMPLE Input:
// projects: a, b, c, d, e, f
// dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)
// Output: f, e, a, b, d, c
// ```

export default function buildOrder(
	projects: string[],
	dependencies: string[][]
): string[] {
	let queue = projects;
	let built: string[] = [];
	let i = 0;
	let passBuilds = 0;

	while (i < queue.length) {
		const p = queue[i];
		const buildable = !dependencies.filter(
			(d) => d[1] == p && !built.includes(d[0])
		).length;

		if (buildable) {
			passBuilds++;
			built.push(p);
			queue.splice(i, 1);
		} else {
			i++;
		}

		if (i == queue.length) {
			if (passBuilds == 0) {
				throw Error("No valid build order exists.");
			}
			i = 0;
			passBuilds = 0;
		}
	}
	return built;
}
