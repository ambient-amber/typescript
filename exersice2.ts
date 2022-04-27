enum faq_status {
    PUBLISHED = 'published',
    DRAFT = 'draft',
    DELETED = 'deleted'
}

async function getFaqs(req: {
    topic_id: number,
    status: faq_status
}): Promise <{
    question: string,
    answer: string,
    tags: string[],
    likes: number,
    status: faq_status
}[]> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });

    return await res.json();
}


let faqs = getFaqs({topic_id: 1, status: faq_status.PUBLISHED});


/*
    --- Запрос ---
    {
        "topicId": 5,
        "status": "published" // "draft", "deleted"
    }

    --- Ответ ---
    [
        {
            "question": "Как осуществляется доставка?",
            "answer": "быстро!",
            "tags": [
                "popular",
                "new"
            ],
            "likes": 3,
            "status": "published"
        }
    ]
*/
