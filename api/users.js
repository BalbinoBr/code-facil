export default function handler(req, res) {
  const users = [
    { id: 1, name: "Athos" },
    { id: 2, name: "Sophia" },
    { id: 3, name: "Isac" }
  ];

  res.status(200).json({ users });
}
