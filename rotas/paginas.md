- Aluno

| Descrição                                     | Método | Rota                | Body |
| --------------------------------------------- | ------ | ------------------- | ---- |
| Criação de perfil (Apenas Admin)              | POST   | /criar-aluno        |      |
| Ver turmas e matérias em que está matriculado | GET    | /turmas             |      |
| Remover inscrições em turmas 				    | DELETE | /cancelar-inscricao |      |

- Perfil

| Descrição                                     | Método | Rota       | Body |
| --------------------------------------------- | ------ | ---------- | ---- |
| Visualização de perfil                        | GET    | /perfil    |      |

- Login

| Descrição                                     | Método | Rota       | Body |
| --------------------------------------------- | ------ | ---------- | ---- |
| Login                                         | POST   | /login     |      |

- Professores

| Descrição                           | Método | Rota       | Body |
| ----------------------------------- | ------ | ---------- | ---- |
| Criação de professor (Apenas Admin) | POST   | /professor |      |
| Visualização de perfil              | GET    | /professor |      |
| Criação de turmas                   | POST   | /turma     |      |
| Deletar turmas                      | DELETE | /turma     |      |
| Alterar turmas                      | PUT    | /turma     |      |

- Inscrições

| Descrição                                   | Método | Rota       | Body |
| ------------------------------------------- | ------ | ---------- | ---- |
| Aluno logado deve se inscrever em uma turma | POST   | /inscricao |      |

- Disciplinas

| Descrição                                   | Método | Rota        | Body |
| ------------------------------------------- | ------ | ----------- | ---- |
| Ver as disciplinas                          | POST   | /disciplina |      |
| Ver as turmas de cada disciplina            | GET    | /turma      |      |

- Turma

| Descrição                                   | Método | Rota       | Body |
| ------------------------------------------- | ------ | ---------- | ---- |
| Acessar a turma e ver informações           | GET    | /inscricao |      |