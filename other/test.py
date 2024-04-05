import spacy

# Load the spaCy model
nlp = spacy.load("en_core_web_sm")

# Define two sentences
sentence1 = "An operating system (OS) is a software program that acts as an intermediary between computer hardware and user applications. It manages computer hardware resources and provides services to both users and application programs."
sentence2 = "An operating system (OS) is basically the software that runs behind the scenes on your computer and manages everything."

# Process the sentences
doc1 = nlp(sentence1)
doc2 = nlp(sentence2)

# Calculate the similarity between the sentences
similarity = doc1.similarity(doc2)

# Print the similarity score
print(f"The similarity between the sentences is: {similarity}")