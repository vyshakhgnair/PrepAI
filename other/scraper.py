import csv
import requests
from bs4 import BeautifulSoup

def google_search(query):
    url = f"https://www.google.com/search?q={query}"
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"}
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return response.text
    else:
        return None

def parse_results(html):
    soup = BeautifulSoup(html, 'html.parser')
    results = []
    for g in soup.find_all('div', class_='r'):
        anchors = g.find_all('a')
        if anchors:
            link = anchors[0]['href']
            title = g.find('h3').text
            snippet = g.find('span', class_='st').text
            results.append({'title': title, 'link': link, 'snippet': snippet})
    return results

def scrape_interview_questions(company):
    query = f"{company} interview questions for software engineer"
    html = google_search(query)
    if html:
        results = parse_results(html)
        return results
    else:
        print("Failed to fetch search results.")

def save_to_csv(data, filename):
    with open(filename, 'w', newline='', encoding='utf-8') as csvfile:
        fieldnames = ['Title', 'Link', 'Snippet']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for row in data:
            writer.writerow(row)

def main():
    companies = ['Google', 'Amazon','TCS','Accenture','Meta','Infosys']
    all_results = []
    for company in companies:
        results = scrape_interview_questions(company)
        if results:
            all_results.extend(results)

    if all_results:
        save_to_csv(all_results, 'interview_questions.csv')
        print("Data saved to interview_questions.csv")
    else:
        print("No data to save.")

if __name__ == "__main__":
    main()
