INSERT INTO aluno (nome, curso, login, senha) VALUES ('João Silva', 'Ciência da Computação', 'joaosilva', 'senha123');
INSERT INTO aluno (nome, curso, login, senha) VALUES ('Maria Santos', 'Engenharia de Software', 'msantos', 'senha456');
INSERT INTO aluno (nome, curso, login, senha) VALUES ('Pedro Oliveira', 'Sistemas de Informação', 'poliveira', 'senha789');
INSERT INTO aluno (nome, curso, login, senha) VALUES ('Ana Souza', 'Análise e Desenvolvimento de Sistemas', 'anasouza', 'senhaABC');
INSERT INTO aluno (nome, curso, login, senha) VALUES ('Lucas Costa', 'Segurança da Informação', 'lucascosta', 'senhaDEF');
INSERT INTO aluno (nome, curso, login, senha) VALUES ('Fernanda Lima', 'Banco de Dados', 'fernandalima', 'senhaGHI');
INSERT INTO aluno (nome, curso, login, senha) VALUES ('Gabriel Pereira', 'Redes de Computadores', 'gabrielpereira', 'senhaJKL');
INSERT INTO aluno (nome, curso, login, senha) VALUES ('Juliana Rodrigues', 'Inteligência Artificial', 'julianarodrigues', 'senhaMNO');
INSERT INTO aluno (nome, curso, login, senha) VALUES ('Rafaela Martins', 'Desenvolvimento Web', 'rafaelamartins', 'senhaPQR');
INSERT INTO aluno (nome, curso, login, senha) VALUES ('Thiago Santos', 'Gestão da Tecnologia da Informação', 'thiagosantos', 'senhaSTU');
INSERT INTO aluno (nome, curso, login, senha) VALUES ('Carolina Oliveira', 'Computação em Nuvem', 'carolinaoliveira', 'senhaVWX');
INSERT INTO aluno (nome, curso, login, senha) VALUES ('Marcelo Almeida', 'Programação de Jogos', 'marceloalmeida', 'senhaYZA');
INSERT INTO aluno (nome, curso, login, senha) VALUES ('Isabela Fernandes', 'Engenharia de Dados', 'isabelafernandes', 'senhaBCD');
INSERT INTO aluno (nome, curso, login, senha) VALUES ('Henrique Gomes', 'Arquitetura de Software', 'henriquegomes', 'senhaEFG');
INSERT INTO aluno (nome, curso, login, senha) VALUES ('Camila Costa', 'Administração de Banco de Dados', 'camilacosta', 'senhaHIJ');


INSERT INTO professor (nome_professor, login, senha, admin) VALUES ('João Silva', 'joao_silva', 'senha123', 1);
INSERT INTO professor (nome_professor, login, senha, admin) VALUES ('Maria Santos', 'maria_santos', 'abcde456', 0);
INSERT INTO professor (nome_professor, login, senha, admin) VALUES ('Pedro Oliveira', 'pedro_oliveira', 'p@ssw0rd', 1);
INSERT INTO professor (nome_professor, login, senha, admin) VALUES ('Ana Costa', 'ana_costa', 'qwerty789', 0);
INSERT INTO professor (nome_professor, login, senha, admin) VALUES ('Carlos Pereira', 'carlos_pereira', '987654', 1);
INSERT INTO professor (nome_professor, login, senha, admin) VALUES ('Lúcia Fernandes', 'lucia_fernandes', 'senha1234', 0);
INSERT INTO professor (nome_professor, login, senha, admin) VALUES ('Rafaela Marques', 'rafaela_marques', 'abcdefg', 1);
INSERT INTO professor (nome_professor, login, senha, admin) VALUES ('Fernando Souza', 'fernando_souza', 'hijklmn', 0);
INSERT INTO professor (nome_professor, login, senha, admin) VALUES ('Patrícia Lima', 'patricia_lima', 'lima123', 1);
INSERT INTO professor (nome_professor, login, senha, admin) VALUES ('Gustavo Torres', 'gustavo_torres', 'senha4321', 0);
INSERT INTO professor (nome_professor, login, senha, admin) VALUES ('Carla Mendes', 'carla_mendes', 'senha12345', 1);
INSERT INTO professor (nome_professor, login, senha, admin) VALUES ('Mariana Costa', 'mariana_costa', 'costa123', 0);
INSERT INTO professor (nome_professor, login, senha, admin) VALUES ('Lucas Fernandes', 'lucas_fernandes', 'senha54321', 1);
INSERT INTO professor (nome_professor, login, senha, admin) VALUES ('Isabela Oliveira', 'isabela_oliveira', 'oliveira456', 0);
INSERT INTO professor (nome_professor, login, senha, admin) VALUES ('Ricardo Santos', 'ricardo_santos', 'santos789', 1);


INSERT INTO disciplina (nome) VALUES ('Introdução à Programação');
INSERT INTO disciplina (nome) VALUES ('Banco de Dados');
INSERT INTO disciplina (nome) VALUES ('Redes de Computadores');
INSERT INTO disciplina (nome) VALUES ('Desenvolvimento Web');
INSERT INTO disciplina (nome) VALUES ('Segurança da Informação');
INSERT INTO disciplina (nome) VALUES ('Inteligência Artificial');
INSERT INTO disciplina (nome) VALUES ('Análise e Projeto de Sistemas');
INSERT INTO disciplina (nome) VALUES ('Engenharia de Software');
INSERT INTO disciplina (nome) VALUES ('Sistemas Operacionais');
INSERT INTO disciplina (nome) VALUES ('Programação Avançada');
INSERT INTO disciplina (nome) VALUES ('Gestão de Projetos de TI');
INSERT INTO disciplina (nome) VALUES ('Computação em Nuvem');
INSERT INTO disciplina (nome) VALUES ('Ética e Legislação em TI');
INSERT INTO disciplina (nome) VALUES ('Internet das Coisas');
INSERT INTO disciplina (nome) VALUES ('Big Data e Analytics');


INSERT INTO turma (turno, id_professor, id_disciplina) VALUES (13, 1, 1);
INSERT INTO turma (turno, id_professor, id_disciplina) VALUES (22, 2, 2);
INSERT INTO turma (turno, id_professor, id_disciplina) VALUES (11, 3, 3);
INSERT INTO turma (turno, id_professor, id_disciplina) VALUES (22, 4, 4);
INSERT INTO turma (turno, id_professor, id_disciplina) VALUES (13, 5, 5);
INSERT INTO turma (turno, id_professor, id_disciplina) VALUES (22, 6, 6);
INSERT INTO turma (turno, id_professor, id_disciplina) VALUES (11, 7, 7);
INSERT INTO turma (turno, id_professor, id_disciplina) VALUES (22, 8, 8);
INSERT INTO turma (turno, id_professor, id_disciplina) VALUES (13, 9, 9);
INSERT INTO turma (turno, id_professor, id_disciplina) VALUES (22, 10, 10);
INSERT INTO turma (turno, id_professor, id_disciplina) VALUES (11, 1, 11);
INSERT INTO turma (turno, id_professor, id_disciplina) VALUES (22, 2, 12);
INSERT INTO turma (turno, id_professor, id_disciplina) VALUES (13, 3, 1);
INSERT INTO turma (turno, id_professor, id_disciplina) VALUES (22, 4, 2);
INSERT INTO turma (turno, id_professor, id_disciplina) VALUES (11, 5, 3);


INSERT INTO inscricoes (id_aluno, numero_turma) VALUES (1, 1);
INSERT INTO inscricoes (id_aluno, numero_turma) VALUES (2, 2);
INSERT INTO inscricoes (id_aluno, numero_turma) VALUES (3, 3);
INSERT INTO inscricoes (id_aluno, numero_turma) VALUES (4, 4);
INSERT INTO inscricoes (id_aluno, numero_turma) VALUES (5, 5);
INSERT INTO inscricoes (id_aluno, numero_turma) VALUES (6, 6);
INSERT INTO inscricoes (id_aluno, numero_turma) VALUES (7, 7);
INSERT INTO inscricoes (id_aluno, numero_turma) VALUES (8, 8);
INSERT INTO inscricoes (id_aluno, numero_turma) VALUES (9, 9);
INSERT INTO inscricoes (id_aluno, numero_turma) VALUES (10, 10);