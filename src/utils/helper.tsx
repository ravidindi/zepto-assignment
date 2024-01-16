export const renderHighlightedText = (text: string, query: string) => {
  if (query === "") {
    return <span>{text}</span>;
  }

  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();

  let lastIndex = 0;
  const parts: React.ReactNode[] = [];

  while (lastIndex < text.length) {
    const index = lowerText.indexOf(lowerQuery, lastIndex);
    if (index === -1) {
      parts.push(<span key={lastIndex}>{text.substring(lastIndex)}</span>);
      break;
    }

    parts.push(
      <span key={`text-${lastIndex}-${index}`}>
        {text.substring(lastIndex, index)}
      </span>
    );
    parts.push(
      <strong key={`highlight-${index}`} style={{ fontWeight: "bold" }}>
        {text.substring(index, index + query.length)}
      </strong>
    );

    lastIndex = index + query.length;
  }

  return parts;
};

export const allUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane.doe@example.com",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Eva White",
    email: "eva.white@example.com",
    imageUrl: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
