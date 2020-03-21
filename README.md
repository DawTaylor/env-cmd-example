# ENV-CMD Example

O `env-cmd` exporta as variáveis de um determinado arquivo no momento de execução do seu script.

## Como funciona?

Basta adicionar o `env-cmd -f caminho/arquivo` antes do seu script que vai iniciar a aplicação.

Exemplo
```json
{
  "scripts": {
    "dev": "env-cmd -f env/.dev.env node src/index.js",
  }
}
```

No exemplo acima, carregaremos as variáveis presentes no arquivo [env/.dev.env](./env/.dev.env) que estarão disponíveis para o `node src/index.js`.

## Exemplos
Esse repo tem 2 exemplos simples utilizando Express. A aplicação acessa duas varíaveis disponíveis via `env-cmd`, `PORT` que será a porta que a aplicação vai escutar, `DOMAIN` que é o nome do domínio que será exibido no corpo da página.

Tente executar os comandos abaixo e ver como a aplicação se comporta com cada um deles. ;)

```sh
npm run dev
npm run test
```