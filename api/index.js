// api/index.js - SIMPLES PARA TESTE
export default function handler(req, res) {
  console.log("✅ API foi chamada!");
  res.status(200).json({ 
    success: true,
    message: "Backend funcionando! 🚀",
    timestamp: new Date().toISOString()
  });
}
