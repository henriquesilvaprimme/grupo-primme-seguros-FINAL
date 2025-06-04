// src/services/leadService.js
export async function buscarLeadsNaoAtribuidos() {
  const url = 'https://script.google.com/macros/s/AKfycbxueF8pDseB_ypxctET-IqgUQijcGXyFoOSJb-0cVfMJFDbyht8qHVnEYdVAK-pt-aWzQ/exec'; // Substitua SEU_DEPLOY_ID pelo seu ID de deploy
  const params = new URLSearchParams({ acao: 'listarLeadsNaoAtribuidos' });

  try {
    const response = await fetch(`${url}?${params.toString()}`, {
      method: 'POST',
    });
    const data = await response.json();

    if (data.status === 'ok') {
      return data.leads;
    } else {
      throw new Error(data.mensagem || 'Erro ao buscar leads');
    }
  } catch (error) {
    console.error('Erro ao buscar leads:', error);
    return [];
  }
}
