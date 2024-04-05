import csv
import requests

def search_google(query, api_key, cx):
    url = f"https://www.googleapis.com/customsearch/v1?q={query}&key={api_key}&cx={cx}"
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        return None

def parse_results(data):
    results = data.get('items', [])
    parsed_results = []
    for result in results:
        title = result.get('title')
        link = result.get('link')
        snippet = result.get('snippet')
        parsed_results.append({'title': title, 'link': link, 'snippet': snippet})
    return parsed_results

def save_to_csv(data, filename):
    with open(filename, 'w', newline='', encoding='utf-8') as csvfile:
        fieldnames = ['Title', 'Link', 'Snippet']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for row in data:
            writer.writerow(row)

def main():
    api_key = 'AIzaSyAmSSRF1HDn1yShL1MjLBRAzn15pa8TMRg'
    cx = '65c4b48a6d5634b83'
    queries = ['Google interview questions software engineer', 'Amazon interview questions for software engineer']
    all_results = []

    for query in queries:
        data = search_google(query, api_key, cx)
        if data:
            results = parse_results(data)
            all_results.extend(results)

    if all_results:
        save_to_csv(all_results, 'interview_questions.csv')
        print("Data saved to interview_questions.csv")
    else:
        print("No data to save.")

if __name__ == "__main__":
    main()
