# Define the domains
domains = {
    'cardiology': {
        'keywords': ['heart', 'chest', 'blood pressure', 'palpitation'],
        'weight': 2
    },
    'gastroenterology': {
        'keywords': ['stomach', 'abdomen', 'nausea', 'vomiting'],
        'weight': 1
    },
    'dermatology': {
        'keywords': ['skin', 'rash', 'itch', 'acne'],
        'weight': 1
    }
}


def get_domain(chief_complaints):
    domain_weights = {}

    # Iterate over all the chief complaints
    for complaint in chief_complaints:
        # Determine the weight for each domain based on the complaint keywords
        for domain, info in domains.items():
            keywords = info['keywords']
            weight = info['weight']
            for keyword in keywords:
                if keyword in complaint.lower():
                    domain_weights[domain] = domain_weights.get(domain, 0) + weight

    # Determine the domain with the highest weight
    max_weight = 0
    selected_domain = None
    for domain, weight in domain_weights.items():
        if weight > max_weight:
            max_weight = weight
            selected_domain = domain

    return selected_domain


###



