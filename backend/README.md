# Backend - Java Spring Boot com MySQL

## Estrutura do Projeto

Esta pasta contém o backend da aplicação desenvolvido com Java Spring Boot e MySQL. O projeto segue uma arquitetura em camadas para melhor organização e manutenibilidade do código.

### Estrutura de Pastas

```
src/
  ├── main/
  │   ├── java/         # Código fonte Java
  │   │   ├── controller/  # Controladores REST
  │   │   ├── model/       # Entidades e modelos
  │   │   ├── repository/ # Repositórios JPA
  │   │   └── exception/     # Exceções personalizadas
  │   └── resources/    # Arquivos de configuração
  └── test/            # Testes unitários e de integração
```

## Tecnologias Principais

- **Spring Boot**: Framework para desenvolvimento da aplicação
- **Spring Data JPA**: Para persistência de dados
- **MySQL**: Banco de dados relacional
- **Maven**: Gerenciamento de dependências

## Funcionalidades

- APIs RESTful para operações CRUD
- Integração com banco de dados MySQL
- Validação de dados
- Tratamento de exceções

## Configuração

1. Configure as credenciais do banco de dados em `application.properties`
2. Execute `mvn clean install` para instalar dependências
3. Execute `mvn spring-boot:run` para iniciar o servidor

O servidor estará disponível em `http://localhost:8080`