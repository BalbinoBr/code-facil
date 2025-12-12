export default function handler(req, res) {
  res.status(200).json({
    users: [
      { id: 1, name: "Athos" },
      { id: 2, name: "Sophia" },
      { id: 3, name: "Isac" }
    ]
  });
}
