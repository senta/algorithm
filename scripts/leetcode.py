import sys
import os
from os import path
import requests  # TODO: use built-in http instead

PROJECT_DIR = path.dirname(path.dirname(__file__))
LANGUAGE_ROOT_DIR = {
    "python3": path.join(PROJECT_DIR, "python", "leetcode"),
    "javascript": path.join(PROJECT_DIR, "typescript", "leetcode"),
}


def fetch_problem_data(problem_url: str):
    slug = problem_url[30:-1]

    payload = {
        "operationName": "questionData",
        "variables": {"titleSlug": slug},
        "query": """query questionData($titleSlug: String!) {
            question(titleSlug: $titleSlug) {
                questionId
                questionFrontendId
                boundTopicId
                title
                titleSlug
                content
                translatedTitle
                translatedContent
                langToValidPlayground
                codeSnippets {
                    langSlug
                    code
                }
                sampleTestCase
            }
        }""",
    }

    s = requests.Session()
    res = s.get(problem_url)

    csrftoken = s.cookies.get_dict().get("csrftoken")
    headers = {
        "Content-Type": "application/json",
        "Referer": problem_url,
        "x-csrftoken": csrftoken,
    }

    res = s.post("https://leetcode.com/graphql", json=payload, headers=headers)
    data = res.json()
    return data["data"]["question"]


def scaffold(problem, languages):
    snippets = [el for el in problem["codeSnippets"] if el["langSlug"] in languages]

    id = int(problem["questionFrontendId"])
    title = problem["title"]
    slug = problem["titleSlug"]

    for snippet in snippets:
        lang = snippet["langSlug"]

        # create a directory
        dirname = "%04d-%s" % (id, slug)
        problem_dir = path.join(LANGUAGE_ROOT_DIR[lang], dirname)
        os.mkdir(problem_dir)

        # create README.md
        create_readme(problem_dir, title, slug)

        # create solution01.py
        create_solution(problem_dir, snippet)

        # create test case
        if lang == "python3":
            create_test_python(problem_dir)
        elif lang == "javascript":
            create_test_typescript(problem_dir)

        print(problem_dir)


def create_readme(dir, title, slug):
    with open(path.join(dir, "README.md"), "w") as fp:
        fp.write("# " + title + "\n")
        fp.write("\n")
        fp.write(f"https://leetcode.com/problems/{slug}/\n")
        fp.write("\n")


def create_solution(dir, snippet):
    lang = snippet["langSlug"]

    if lang == "python3":
        ext = "py"
    elif lang == "javascript":
        ext = "ts"
    else:
        ext = lang

    with open(path.join(dir, f"solution01.{ext}"), "w") as fp:
        fp.write(snippet["code"])


def create_test_python(dir):
    with open(path.join(dir, "test_solutions.py"), "w") as fp:
        fp.write(
            """import solution01
from pprint import pprint
modules = [solution01]

testcases = (
    (("",), 0),
    (("   ",), 0)
)

def test_case1():
    for module in modules:
        solution = module.Solution()

        for args, expected in testcases:
            assert solution.myAtoi(*args) == expected
"""
        )


def create_test_typescript(dir):
    with open(path.join(dir, "solutions.test.ts"), "w") as fp:
        fp.write(
            """import { myAtoi as solution01 } from "./solution01"

type Input = Parameters<typeof solution01>
type Output = ReturnType<typeof solution01>
type TestCase = [Input, Output]

const testcases: TestCase[] = [
  [[""], 0],
  [["   "],  0]
]

const solutions = [solution01]

for (let i = 0; i < solutions.length; i++) {

  for (let j = 0; j < testcases.length; j++) {
    const [args, expected] = testcases[j]

    test(`solution: ${i}: case: ${j}`, () => {
      expect(solutions[i].apply(null, args)).toEqual(expected)
    })
  }
}
"""
        )


def main():
    if len(sys.argv) < 2:
        print("wrong arguments")
        print("python leetcode.py 'https://leetcode.com/problems/validate-ip-address/'")
        sys.exit()

    problem_url = sys.argv[1]
    # language = sys.argv[2]
    languages = ["python3", "javascript"]

    problem = fetch_problem_data(problem_url)
    scaffold(problem, languages)


if __name__ == "__main__":
    main()
