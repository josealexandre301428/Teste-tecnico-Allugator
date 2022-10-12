module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('infos', [
      {
        product_id: 1,
        marca:'Apple', 
        armazenamento: '64GB',
        tela: 'Tela Super Retina XDR de 6,1 polegadas Ceramic Shield. Mais resistente do que qualquer vidro de smartphone',
        camera_frontal: 'Câmara frontal TrueDepth de 12 MP com modo Noite, gravação em HDR 4K Dolby Vision',
        camera_traseira: 'Sistema de câmara dupla avançado de 12 MP (Ultra grande angular e Grande angular) com modo Noite, Deep Fusion, HDR inteligente 3, gravação em HDR 4K Dolby Vision',
        processador: 'A14 Bionic, o processador mais rápido de sempre num smartphone',
      },
      {
        product_id: 2,
        marca:'Apple', 
        armazenamento: '128GB',
        tela: 'Tela Super Retina XDR de 6,1 polegadas Modo Cinema. Diminui a profundidade de campo e muda o foco nos seus vídeos automaticamente',
        camera_frontal: 'Câmera frontal TrueDepth de 12 MP com modo Noite, gravação de vídeo 4K HDR Dolby Vision',
        camera_traseira: 'Sistema avançado de câmera dupla (grande-angular e ultra-angular) de 12 MP; Estilos Fotográficos, HDR Inteligente 4, modo Noite, gravação de vídeo 4K HDR Dolby Vision',
        processador: 'Chip A15 Bionic para um desempenho impressionante',
      },
      {
        product_id: 3,
        marca:'Apple', 
        armazenamento: '128GB',
        tela: 'Tela Super Retina XDR de 6,1 polegadas com ProMotion para uma sensação mais rápida e responsiva O modo cinematic adiciona profundidade de campo rasa e muda o foco automaticamente em seus vídeos',
        camera_frontal: 'Câmera frontal TrueDepth de 12 MP com modo noturno, gravação 4K Dolby Vision HDR',
        camera_traseira: 'Sistema de câmera Pro com novas câmeras 12MP Telefoto, Wide e Ultra Wide; LiDAR Scanner; Alcance do zoom ótico 6x; macro fotografia; Estilos fotográficos, vídeo ProRes, Smart HDR 4, modo noturno, Apple ProRAW, gravação 4K Dolby Vision HDR',
        processador: 'Chip biônico A15 para desempenho ultrarrápido',
      },
      {
        product_id: 4,
        marca:'Apple', 
        armazenamento: '128GB',
        tela: 'Tela Super Retina XDR de 6,7 polegadas com tela Sempre Ativa e ProMotion. Dynamic Island, uma nova forma de interação no iPhone',
        camera_frontal: 'Câmara frontal TrueDepth de 12 MP com modo Noite, gravação em HDR 4K Dolby Vision',
        camera_traseira: 'Sistema de câmara dupla avançado de 12 MP (Ultra grande angular e Grande angular) com modo Noite, Deep Fusion, HDR inteligente 3, gravação em HDR 4K Dolby Vision',
        processador: 'A16 Bionic, o máximo em chip para smartphone. Rede celular 5G ultrarrápida',
      },
    ], {});
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('infos', null, {});
  },
};