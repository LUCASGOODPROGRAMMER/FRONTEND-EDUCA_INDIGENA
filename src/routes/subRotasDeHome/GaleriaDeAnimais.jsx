import "./GaleriaDeAnimais.css";
const GaleriaDeAnimais = () => {
  // simulação de busca da api
  const galeriasDeAnimais = [
    {
      id_gal: 1,
      nome_gal: "Leão Africano",
      author_gal: "Lucas Huber",
      descricao_gal:
        "O leão africano é conhecido como o rei da selva e vive em savanas e planícies da África.",
      rota_img_gal:
        "https://i.pinimg.com/736x/ae/ab/a5/aeaba5e7e5a5b9d4d28e1754e6601c72.jpg",
      audio_descricao_gal: "/assets/audios/leao.mp3",
      data_post_gal: "2025-10-10T10:00:00Z",
      data_update_gal: "2025-10-10T10:00:00Z",
      user_key_fk: "user_001",
    },
    {
      id_gal: 2,
      nome_gal: "Elefante Asiático",
      author_gal: "Maria Silva",
      descricao_gal:
        "O elefante asiático é um dos maiores mamíferos terrestres e possui orelhas menores que as dos elefantes africanos.",
      rota_img_gal:
        "https://i.pinimg.com/736x/87/8e/7d/878e7d5e282836db38044d84f6ebe578.jpg",
      audio_descricao_gal: "/assets/audios/elefante.mp3",
      data_post_gal: "2025-10-09T15:30:00Z",
      data_update_gal: "2025-10-09T16:00:00Z",
      user_key_fk: "user_002",
    },
    {
      id_gal: 3,
      nome_gal: "Tigre de Bengala",
      author_gal: "João Pereira",
      descricao_gal:
        "O tigre de Bengala é um felino majestoso encontrado em florestas tropicais da Índia e Bangladesh.",
      rota_img_gal:
        "https://i.pinimg.com/736x/5e/29/ef/5e29efc8f7bbe4e26162fb7ede48f30a.jpg",
      audio_descricao_gal: "/assets/audios/tigre.mp3",
      data_post_gal: "2025-10-08T09:45:00Z",
      data_update_gal: "2025-10-09T12:00:00Z",
      user_key_fk: "user_003",
    },
  ];
  return (
    <div className="container-de-galerias">
      {/* usando forEach pois meu objetivo é somente consulta */}
      {galeriasDeAnimais.map((gallery) => (
        <div className="card-gallery-animal" key={gallery.id_gal}>
          <div className="user-profile-gallery">
            <img
              src="https://i.pinimg.com/736x/49/ce/34/49ce3483568ff1a59a593bad8287f232.jpg"
              alt=""
            />
            <h3>{gallery.author_gal}</h3>
          </div>
          <div className="content-gallery-img">
            <img src={gallery.rota_img_gal} alt="" />
            <h2>{gallery.nome_gal}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GaleriaDeAnimais;
