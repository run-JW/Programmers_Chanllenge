function solution(skill, skillTrees) {
    const test = `[^${skill}]`
    const regex = new RegExp(test, "g");

    return skillTrees.map(skillTree => skillTree.replace(regex, ''))
        .filter(el => {
            if (el.length === skill.length)
                return (el === skill) ? true : false;
            else {
                return (el === skill.slice(0, el.length)) ?
                    true : false;
            }
        }).length;
}
