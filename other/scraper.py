import requests
from bs4 import BeautifulSoup

def scrape_tcs_interview_questions(url):
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')
        questions = []
        for question in soup.find_all('div', class_='card-body'):
            question_text = question.find('h3').text.strip()
            answers = []
            if question.find('table'):
                table = question.find('table')
                for row in table.find_all('tr'):
                    cells = [cell.text.strip() for cell in row.find_all('td')]
                    answers.append(cells)
            else:
                answer = question.find('p').text.strip()
                answers.append(answer)
            questions.append({'question': question_text, 'answers': answers})
        return questions
    else:
        print("Failed to fetch data.")
        return None

def main():
    url = 'https://prepinsta.com/tcs/interview-questions/'
    questions = scrape_tcs_interview_questions(url)
    if questions:
        for idx, question in enumerate(questions, start=1):
            print(f"Question {idx}: {question['question']}")
            if isinstance(question['answers'][0], list):
                print("Answers:")
                for answer in question['answers']:
                    print("\t" + "\n\t".join(answer))
            else:
                print("Answer:", question['answers'][0])
            print()
    else:
        print("No questions scraped.")

if __name__ == "__main__":
    main()