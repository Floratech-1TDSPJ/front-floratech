/* monitoramento.js — Floratech
   Painel de risco simulado com dados por estado */

/* Base de dados simulada com informações de cada estado */
var dadosEstados = {
    'AC': {
        nome: 'Acre',
        risco: 'medio',
        emoji: '🟡',
        focos: 310,
        diasSemChuva: 10,
        precipitacao: '45mm',
        temperatura: '32°C',
        descricao: 'Risco moderado. Início da estação seca no sudoeste amazônico. Fique atento às condições.',
        historico: [
            { mes: 'Maio 2026',  focos: 310, nivel: 'medio' },
            { mes: 'Abril 2026', focos: 180, nivel: 'baixo' },
            { mes: 'Mar. 2026',  focos: 90,  nivel: 'baixo' },
            { mes: 'Fev. 2026',  focos: 42,  nivel: 'baixo' },
            { mes: 'Jan. 2026',  focos: 28,  nivel: 'baixo' }
        ]
    },
    'AL': {
        nome: 'Alagoas',
        risco: 'baixo',
        emoji: '🟢',
        focos: 95,
        diasSemChuva: 5,
        precipitacao: '60mm',
        temperatura: '28°C',
        descricao: 'Baixo risco. Chuvas regulares na zona da mata e litoral mantêm as condições estáveis.',
        historico: [
            { mes: 'Maio 2026',  focos: 95,  nivel: 'baixo' },
            { mes: 'Abril 2026', focos: 110, nivel: 'baixo' },
            { mes: 'Mar. 2026',  focos: 88,  nivel: 'baixo' },
            { mes: 'Fev. 2026',  focos: 62,  nivel: 'baixo' },
            { mes: 'Jan. 2026',  focos: 75,  nivel: 'baixo' }
        ]
    },
    'AP': {
        nome: 'Amapá',
        risco: 'medio',
        emoji: '🟡',
        focos: 390,
        diasSemChuva: 13,
        precipitacao: '38mm',
        temperatura: '31°C',
        descricao: 'Atenção moderada. A redução de chuvas no norte do estado eleva o risco pontualmente.',
        historico: [
            { mes: 'Maio 2026',  focos: 390, nivel: 'medio' },
            { mes: 'Abril 2026', focos: 210, nivel: 'baixo' },
            { mes: 'Mar. 2026',  focos: 120, nivel: 'baixo' },
            { mes: 'Fev. 2026',  focos: 55,  nivel: 'baixo' },
            { mes: 'Jan. 2026',  focos: 40,  nivel: 'baixo' }
        ]
    },
    'AM': {
        nome: 'Amazonas',
        risco: 'medio',
        emoji: '🟡',
        focos: 420,
        diasSemChuva: 12,
        precipitacao: '42mm',
        temperatura: '32°C',
        descricao: 'Monitoramento ativo. A estação seca começa a impactar partes do sul do estado.',
        historico: [
            { mes: 'Maio 2026',  focos: 420, nivel: 'medio' },
            { mes: 'Abril 2026', focos: 210, nivel: 'baixo' },
            { mes: 'Mar. 2026',  focos: 95,  nivel: 'baixo' },
            { mes: 'Fev. 2026',  focos: 60,  nivel: 'baixo' },
            { mes: 'Jan. 2026',  focos: 42,  nivel: 'baixo' }
        ]
    },
    'BA': {
        nome: 'Bahia',
        risco: 'medio',
        emoji: '🟡',
        focos: 748,
        diasSemChuva: 15,
        precipitacao: '28mm',
        temperatura: '31°C',
        descricao: 'Risco moderado. Período de estiagem no sertão. Evite queimadas controladas.',
        historico: [
            { mes: 'Maio 2026',  focos: 748, nivel: 'medio' },
            { mes: 'Abril 2026', focos: 510, nivel: 'medio' },
            { mes: 'Mar. 2026',  focos: 280, nivel: 'baixo' },
            { mes: 'Fev. 2026',  focos: 190, nivel: 'baixo' },
            { mes: 'Jan. 2026',  focos: 420, nivel: 'medio' }
        ]
    },
    'CE': {
        nome: 'Ceará',
        risco: 'medio',
        emoji: '🟡',
        focos: 340,
        diasSemChuva: 11,
        precipitacao: '32mm',
        temperatura: '33°C',
        descricao: 'Atenção moderada. Regiões do sertão cearense apresentam maior concentração de focos.',
        historico: [
            { mes: 'Maio 2026',  focos: 340, nivel: 'medio' },
            { mes: 'Abril 2026', focos: 260, nivel: 'baixo' },
            { mes: 'Mar. 2026',  focos: 140, nivel: 'baixo' },
            { mes: 'Fev. 2026',  focos: 90,  nivel: 'baixo' },
            { mes: 'Jan. 2026',  focos: 115, nivel: 'baixo' }
        ]
    },
    'DF': {
        nome: 'Distrito Federal',
        risco: 'medio',
        emoji: '🟡',
        focos: 180,
        diasSemChuva: 17,
        precipitacao: '18mm',
        temperatura: '30°C',
        descricao: 'Risco moderado. O cerrado do DF é altamente suscetível a queimadas na seca. Mantenha vigilância.',
        historico: [
            { mes: 'Maio 2026',  focos: 180, nivel: 'medio' },
            { mes: 'Abril 2026', focos: 95,  nivel: 'baixo' },
            { mes: 'Mar. 2026',  focos: 42,  nivel: 'baixo' },
            { mes: 'Fev. 2026',  focos: 18,  nivel: 'baixo' },
            { mes: 'Jan. 2026',  focos: 25,  nivel: 'baixo' }
        ]
    },
    'ES': {
        nome: 'Espírito Santo',
        risco: 'baixo',
        emoji: '🟢',
        focos: 74,
        diasSemChuva: 4,
        precipitacao: '65mm',
        temperatura: '27°C',
        descricao: 'Baixo risco. Chuvas regulares e temperaturas amenas favorecem boas condições no estado.',
        historico: [
            { mes: 'Maio 2026',  focos: 74,  nivel: 'baixo' },
            { mes: 'Abril 2026', focos: 88,  nivel: 'baixo' },
            { mes: 'Mar. 2026',  focos: 65,  nivel: 'baixo' },
            { mes: 'Fev. 2026',  focos: 50,  nivel: 'baixo' },
            { mes: 'Jan. 2026',  focos: 58,  nivel: 'baixo' }
        ]
    },
    'GO': {
        nome: 'Goiás',
        risco: 'medio',
        emoji: '🟡',
        focos: 632,
        diasSemChuva: 18,
        precipitacao: '21mm',
        temperatura: '33°C',
        descricao: 'Atenção moderada. Período de estiagem em curso no Cerrado. Monitore sua propriedade.',
        historico: [
            { mes: 'Maio 2026',  focos: 632, nivel: 'medio' },
            { mes: 'Abril 2026', focos: 480, nivel: 'medio' },
            { mes: 'Mar. 2026',  focos: 210, nivel: 'baixo' },
            { mes: 'Fev. 2026',  focos: 95,  nivel: 'baixo' },
            { mes: 'Jan. 2026',  focos: 140, nivel: 'baixo' }
        ]
    },
    'MA': {
        nome: 'Maranhão',
        risco: 'alto',
        emoji: '🔴',
        focos: 1210,
        diasSemChuva: 20,
        precipitacao: '14mm',
        temperatura: '35°C',
        descricao: 'Alto risco. O Matopiba — divisa com o cerrado — concentra a maioria dos focos. Atenção reforçada.',
        historico: [
            { mes: 'Maio 2026',  focos: 1210, nivel: 'alto' },
            { mes: 'Abril 2026', focos: 890,  nivel: 'medio' },
            { mes: 'Mar. 2026',  focos: 420,  nivel: 'medio' },
            { mes: 'Fev. 2026',  focos: 180,  nivel: 'baixo' },
            { mes: 'Jan. 2026',  focos: 210,  nivel: 'baixo' }
        ]
    },
    'MT': {
        nome: 'Mato Grosso',
        risco: 'alto',
        emoji: '🔴',
        focos: 3812,
        diasSemChuva: 31,
        precipitacao: '4mm',
        temperatura: '38°C',
        descricao: 'Risco crítico. O estado registra o maior número de focos do país. Atenção máxima.',
        historico: [
            { mes: 'Maio 2026',  focos: 3812, nivel: 'alto' },
            { mes: 'Abril 2026', focos: 2940, nivel: 'alto' },
            { mes: 'Mar. 2026',  focos: 1800, nivel: 'alto' },
            { mes: 'Fev. 2026',  focos: 640,  nivel: 'medio' },
            { mes: 'Jan. 2026',  focos: 310,  nivel: 'medio' }
        ]
    },
    'MS': {
        nome: 'Mato Grosso do Sul',
        risco: 'medio',
        emoji: '🟡',
        focos: 520,
        diasSemChuva: 14,
        precipitacao: '26mm',
        temperatura: '34°C',
        descricao: 'Risco moderado. O Pantanal sul-mato-grossense exige atenção especial neste período.',
        historico: [
            { mes: 'Maio 2026',  focos: 520, nivel: 'medio' },
            { mes: 'Abril 2026', focos: 380, nivel: 'medio' },
            { mes: 'Mar. 2026',  focos: 190, nivel: 'baixo' },
            { mes: 'Fev. 2026',  focos: 95,  nivel: 'baixo' },
            { mes: 'Jan. 2026',  focos: 120, nivel: 'baixo' }
        ]
    },
    'MG': {
        nome: 'Minas Gerais',
        risco: 'alto',
        emoji: '🔴',
        focos: 980,
        diasSemChuva: 19,
        precipitacao: '16mm',
        temperatura: '33°C',
        descricao: 'Alto risco. Região do norte mineiro e triângulo mineiro com estiagem prolongada.',
        historico: [
            { mes: 'Maio 2026',  focos: 980, nivel: 'alto' },
            { mes: 'Abril 2026', focos: 720, nivel: 'medio' },
            { mes: 'Mar. 2026',  focos: 350, nivel: 'medio' },
            { mes: 'Fev. 2026',  focos: 140, nivel: 'baixo' },
            { mes: 'Jan. 2026',  focos: 190, nivel: 'baixo' }
        ]
    },
    'PA': {
        nome: 'Pará',
        risco: 'alto',
        emoji: '🔴',
        focos: 2654,
        diasSemChuva: 28,
        precipitacao: '8mm',
        temperatura: '36°C',
        descricao: 'Risco elevado. Região com histórico intenso de desmatamento e queimadas. Alerta máximo.',
        historico: [
            { mes: 'Maio 2026',  focos: 2654, nivel: 'alto' },
            { mes: 'Abril 2026', focos: 1940, nivel: 'alto' },
            { mes: 'Mar. 2026',  focos: 890,  nivel: 'medio' },
            { mes: 'Fev. 2026',  focos: 420,  nivel: 'medio' },
            { mes: 'Jan. 2026',  focos: 280,  nivel: 'baixo' }
        ]
    },
    'PB': {
        nome: 'Paraíba',
        risco: 'baixo',
        emoji: '🟢',
        focos: 118,
        diasSemChuva: 6,
        precipitacao: '52mm',
        temperatura: '29°C',
        descricao: 'Baixo risco. Chuvas recentes reduziram o número de focos no estado.',
        historico: [
            { mes: 'Maio 2026',  focos: 118, nivel: 'baixo' },
            { mes: 'Abril 2026', focos: 145, nivel: 'baixo' },
            { mes: 'Mar. 2026',  focos: 98,  nivel: 'baixo' },
            { mes: 'Fev. 2026',  focos: 72,  nivel: 'baixo' },
            { mes: 'Jan. 2026',  focos: 85,  nivel: 'baixo' }
        ]
    },
    'PR': {
        nome: 'Paraná',
        risco: 'medio',
        emoji: '🟡',
        focos: 210,
        diasSemChuva: 8,
        precipitacao: '48mm',
        temperatura: '26°C',
        descricao: 'Atenção moderada. Norte do estado com menor precipitação elevando pontualmente o risco.',
        historico: [
            { mes: 'Maio 2026',  focos: 210, nivel: 'medio' },
            { mes: 'Abril 2026', focos: 160, nivel: 'baixo' },
            { mes: 'Mar. 2026',  focos: 95,  nivel: 'baixo' },
            { mes: 'Fev. 2026',  focos: 60,  nivel: 'baixo' },
            { mes: 'Jan. 2026',  focos: 78,  nivel: 'baixo' }
        ]
    },
    'PE': {
        nome: 'Pernambuco',
        risco: 'medio',
        emoji: '🟡',
        focos: 280,
        diasSemChuva: 9,
        precipitacao: '36mm',
        temperatura: '30°C',
        descricao: 'Risco moderado. Sertão pernambucano com estiagem e concentração de focos no interior.',
        historico: [
            { mes: 'Maio 2026',  focos: 280, nivel: 'medio' },
            { mes: 'Abril 2026', focos: 210, nivel: 'baixo' },
            { mes: 'Mar. 2026',  focos: 130, nivel: 'baixo' },
            { mes: 'Fev. 2026',  focos: 88,  nivel: 'baixo' },
            { mes: 'Jan. 2026',  focos: 100, nivel: 'baixo' }
        ]
    },
    'PI': {
        nome: 'Piauí',
        risco: 'medio',
        emoji: '🟡',
        focos: 580,
        diasSemChuva: 16,
        precipitacao: '24mm',
        temperatura: '34°C',
        descricao: 'Atenção moderada. Região do cerrado piauiense com focos crescentes no mês.',
        historico: [
            { mes: 'Maio 2026',  focos: 580, nivel: 'medio' },
            { mes: 'Abril 2026', focos: 410, nivel: 'medio' },
            { mes: 'Mar. 2026',  focos: 200, nivel: 'baixo' },
            { mes: 'Fev. 2026',  focos: 95,  nivel: 'baixo' },
            { mes: 'Jan. 2026',  focos: 130, nivel: 'baixo' }
        ]
    },
    'RJ': {
        nome: 'Rio de Janeiro',
        risco: 'baixo',
        emoji: '🟢',
        focos: 61,
        diasSemChuva: 4,
        precipitacao: '70mm',
        temperatura: '26°C',
        descricao: 'Baixo risco. Chuvas regulares e cobertura vegetal preservada mantêm o estado seguro.',
        historico: [
            { mes: 'Maio 2026',  focos: 61,  nivel: 'baixo' },
            { mes: 'Abril 2026', focos: 72,  nivel: 'baixo' },
            { mes: 'Mar. 2026',  focos: 58,  nivel: 'baixo' },
            { mes: 'Fev. 2026',  focos: 44,  nivel: 'baixo' },
            { mes: 'Jan. 2026',  focos: 50,  nivel: 'baixo' }
        ]
    },
    'RN': {
        nome: 'Rio Grande do Norte',
        risco: 'baixo',
        emoji: '🟢',
        focos: 142,
        diasSemChuva: 7,
        precipitacao: '44mm',
        temperatura: '29°C',
        descricao: 'Baixo risco. Litoral com boa umidade; interior requer atenção pontual.',
        historico: [
            { mes: 'Maio 2026',  focos: 142, nivel: 'baixo' },
            { mes: 'Abril 2026', focos: 168, nivel: 'baixo' },
            { mes: 'Mar. 2026',  focos: 110, nivel: 'baixo' },
            { mes: 'Fev. 2026',  focos: 85,  nivel: 'baixo' },
            { mes: 'Jan. 2026',  focos: 92,  nivel: 'baixo' }
        ]
    },
    'RS': {
        nome: 'Rio Grande do Sul',
        risco: 'baixo',
        emoji: '🟢',
        focos: 48,
        diasSemChuva: 4,
        precipitacao: '85mm',
        temperatura: '22°C',
        descricao: 'Baixo risco. Chuvas regulares e temperaturas amenas favorecem excelentes condições.',
        historico: [
            { mes: 'Maio 2026',  focos: 48,  nivel: 'baixo' },
            { mes: 'Abril 2026', focos: 62,  nivel: 'baixo' },
            { mes: 'Mar. 2026',  focos: 110, nivel: 'baixo' },
            { mes: 'Fev. 2026',  focos: 145, nivel: 'baixo' },
            { mes: 'Jan. 2026',  focos: 98,  nivel: 'baixo' }
        ]
    },
    'RO': {
        nome: 'Rondônia',
        risco: 'alto',
        emoji: '🔴',
        focos: 1980,
        diasSemChuva: 26,
        precipitacao: '6mm',
        temperatura: '37°C',
        descricao: 'Alto risco. Estado historicamente afetado por queimadas na Amazônia sul-ocidental.',
        historico: [
            { mes: 'Maio 2026',  focos: 1980, nivel: 'alto' },
            { mes: 'Abril 2026', focos: 1420, nivel: 'alto' },
            { mes: 'Mar. 2026',  focos: 680,  nivel: 'medio' },
            { mes: 'Fev. 2026',  focos: 240,  nivel: 'baixo' },
            { mes: 'Jan. 2026',  focos: 150,  nivel: 'baixo' }
        ]
    },
    'RR': {
        nome: 'Roraima',
        risco: 'alto',
        emoji: '🔴',
        focos: 870,
        diasSemChuva: 18,
        precipitacao: '11mm',
        temperatura: '36°C',
        descricao: 'Alto risco. O norte do estado sofre com período de seca severa e aumento de focos.',
        historico: [
            { mes: 'Maio 2026',  focos: 870, nivel: 'alto' },
            { mes: 'Abril 2026', focos: 620, nivel: 'medio' },
            { mes: 'Mar. 2026',  focos: 310, nivel: 'medio' },
            { mes: 'Fev. 2026',  focos: 120, nivel: 'baixo' },
            { mes: 'Jan. 2026',  focos: 80,  nivel: 'baixo' }
        ]
    },
    'SC': {
        nome: 'Santa Catarina',
        risco: 'baixo',
        emoji: '🟢',
        focos: 32,
        diasSemChuva: 6,
        precipitacao: '72mm',
        temperatura: '21°C',
        descricao: 'Baixo risco. Condições excelentes com chuvas regulares e temperaturas amenas.',
        historico: [
            { mes: 'Maio 2026',  focos: 32,  nivel: 'baixo' },
            { mes: 'Abril 2026', focos: 41,  nivel: 'baixo' },
            { mes: 'Mar. 2026',  focos: 58,  nivel: 'baixo' },
            { mes: 'Fev. 2026',  focos: 75,  nivel: 'baixo' },
            { mes: 'Jan. 2026',  focos: 88,  nivel: 'baixo' }
        ]
    },
    'SP': {
        nome: 'São Paulo',
        risco: 'alto',
        emoji: '🔴',
        focos: 1423,
        diasSemChuva: 22,
        precipitacao: '12mm',
        temperatura: '34°C',
        descricao: 'Alto risco de queimadas. Evite atividades com fogo e mantenha vigilância reforçada na propriedade.',
        historico: [
            { mes: 'Maio 2026',  focos: 1423, nivel: 'alto' },
            { mes: 'Abril 2026', focos: 890,  nivel: 'medio' },
            { mes: 'Mar. 2026',  focos: 412,  nivel: 'medio' },
            { mes: 'Fev. 2026',  focos: 120,  nivel: 'baixo' },
            { mes: 'Jan. 2026',  focos: 95,   nivel: 'baixo' }
        ]
    },
    'SE': {
        nome: 'Sergipe',
        risco: 'baixo',
        emoji: '🟢',
        focos: 82,
        diasSemChuva: 5,
        precipitacao: '58mm',
        temperatura: '28°C',
        descricao: 'Baixo risco. Menor estado do Brasil com boa cobertura de chuvas neste período.',
        historico: [
            { mes: 'Maio 2026',  focos: 82,  nivel: 'baixo' },
            { mes: 'Abril 2026', focos: 95,  nivel: 'baixo' },
            { mes: 'Mar. 2026',  focos: 72,  nivel: 'baixo' },
            { mes: 'Fev. 2026',  focos: 55,  nivel: 'baixo' },
            { mes: 'Jan. 2026',  focos: 60,  nivel: 'baixo' }
        ]
    },
    'TO': {
        nome: 'Tocantins',
        risco: 'alto',
        emoji: '🔴',
        focos: 1650,
        diasSemChuva: 24,
        precipitacao: '9mm',
        temperatura: '36°C',
        descricao: 'Alto risco. Cerrado tocantinense com seca intensa e focos crescentes na região central.',
        historico: [
            { mes: 'Maio 2026',  focos: 1650, nivel: 'alto' },
            { mes: 'Abril 2026', focos: 1180, nivel: 'alto' },
            { mes: 'Mar. 2026',  focos: 560,  nivel: 'medio' },
            { mes: 'Fev. 2026',  focos: 200,  nivel: 'baixo' },
            { mes: 'Jan. 2026',  focos: 140,  nivel: 'baixo' }
        ]
    }
};

function buscarDados() {
    var select = document.getElementById('estadoSelect');
    var sigla = select.value;

    if (!sigla) {
        alert('Por favor, selecione um estado.');
        return;
    }

    var dados = dadosEstados[sigla];
    if (!dados) {
        alert('Dados não disponíveis para este estado ainda.');
        return;
    }

    exibirResultado(dados);
}

function exibirResultado(dados) {
    /* Nome do estado */
    document.getElementById('resultEstadoNome').textContent = dados.nome;

    /* Score de risco */
    var scoreEl = document.getElementById('resultScore');
    scoreEl.className = 'monitor__score monitor__score--' + dados.risco;

    var badgeEl = document.getElementById('resultBadge');
    badgeEl.className = 'monitor__badge monitor__badge--' + dados.risco;
    var textoRisco = dados.risco === 'alto' ? '🔴 Risco Alto' : dados.risco === 'medio' ? '🟡 Risco Médio' : '🟢 Risco Baixo';
    badgeEl.textContent = textoRisco;

    document.getElementById('resultEmoji').textContent = dados.emoji;
    document.getElementById('resultDescricao').textContent = dados.descricao;

    /* Métricas */
    document.getElementById('resultFocos').textContent = dados.focos.toLocaleString('pt-BR');
    document.getElementById('resultDias').textContent = dados.diasSemChuva;
    document.getElementById('resultChuva').textContent = dados.precipitacao;
    document.getElementById('resultTemp').textContent = dados.temperatura;

    /* Histórico */
    var listaHistorico = document.getElementById('resultHistorico');
    listaHistorico.innerHTML = '';

    dados.historico.forEach(function (item) {
        var div = document.createElement('div');
        div.className = 'monitor__historico-item';
        div.innerHTML =
            '<span class="monitor__historico-mes">' + item.mes + '</span>' +
            '<span class="monitor__historico-focos ' + item.nivel + '">' + item.focos.toLocaleString('pt-BR') + ' focos</span>';
        listaHistorico.appendChild(div);
    });

    /* Exibe o painel */
    var resultado = document.getElementById('painelResultado');
    resultado.classList.add('visivel');
    resultado.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
