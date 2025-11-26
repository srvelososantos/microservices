

<h1>Gerenciamento e fiscalização de vias públicas e compras</h1>

# Funcionamento dos Microserviços

Microserviço 'fiscalização' é responsável por criar novas requisições, solicitando que seja feito um serviço em alguma área do município que precisa de regularização ou limpeza com alguma máquina de grande porte.

Microserviço 'serviços' é responsável por executar serviços enviados pelo 'fiscalização'. Pode ser executado com máquinas como pá carregadeira, retroescavadeira, caminhões e etc.. São serviços que podem ser adicionados futuramente.

Microserviço 'compras' é responsável por realizar uma aquisição de peças ou serviços para realização da adequada manutenção das máquinas e veículos que o setor de serviços possui.

Funcionamento - A comunicação é feita com rabbitmq e todos os serviços são independentes, ao criar uma nova requisição, ela é enviada para 'serviços'. Assim que a mensagem chega o serviço pode ser realizado com sucesso, modificando o status dele ou pode falhar, resultando na quebra de uma máquina. Se a máquina quebrar, o 'compras' recebe a mensagem e trata de iniciar o procedimento de compras. 

# Padrões de projeto: 
FACTORY - Foi utilizado para compor os serviços, cada serviço possui um tipo de máquina que o realizará. Cada tipo de máquina possui um tipo diferente de classe, possui seus próprios componentes e atributos.

STRATEGY - Foi utilizado para compor as compras. Compras até 2 mil reais podem ser compradas diretamente. Compras de 2 a 8 mil reais precisam de coleta de orçamento de diferentes fornecedores ou prestadores de serviço. Compras acima de 8 mil reais necessitam de abertura de processo de licitação. Cada tipo de compra com seu procedimento específico.

REPOSITORY - Foi utilizado para funcionar como uma abstração entre o código e o banco de dados. 

SINGLETON - Utilizado para criação da conexão dos bancos de dados de cada microserviço (embora não tenha sido implementada da maneira ideal)

# DOCKER COMPOSE - docker compose up --build

MICROSERVIÇO COMPRAS - http://localhost:4000

	- GET `/purchases` - LISTA COMPRAS
	- GET `/purchases/:id` - LISTA COMPRA PELO ID 
	
MICROSERVIÇO SERVIÇOS - http://localhost:4001

	- GET `/services` - LISTA SERVIÇOS
	- GET `/services/:id` - LISTA SERVIÇOS PELO ID
MICROSERVIÇO FISCALIZAÇÃO - http://localhost:4002

	- POST `/request/new` - NOVA REQUISIÇÃO 
	nova requisição (fiscalizacao)
	// 70% para quebrar
	{
		"deadline": 15,
		"description": "rua 2",
		"location": "rua augusta 12 centro",
		"machineType": "FRONT_END_LOADER",
		"status": "pending",
		"price": 21
	}
	
	// 20% para quebrar
	{
		"deadline": 15,
		"description": "rua 2",
		"location": "rua augusta 12 centro",
		"machineType": "BACKHOE",
		"status": "pending",
		"price": 21
	}
	
	// 40% para quebrar
	{
		"deadline": 15,
		"description": "rua 2",
		"location": "rua augusta 12 centro",
		"machineType": "LAWN_MOWER",
		"status": "pending",
		"price": 21
	}
	
	// 10% para quebrar
	{
		"deadline": 15,
		"description": "rua 2",
		"location": "rua augusta 12 centro",
		"machineType": "DELIVER_TRUCK",
		"status": "pending",
		"price": 21
	}
	- GET `/request` - LISTA REQUISIÇÕES
	- GET `/request/:id` - LISTA REQUISIÇÃO PELO ID

