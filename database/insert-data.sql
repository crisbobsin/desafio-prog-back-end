INSERT INTO aluno(id, nome, matricula, curso, login, senha) VALUES(01, 'Eduarda Rosseto', 159951, 'Sistemas para internet', 'eduarda', 123 );
INSERT INTO aluno(id, nome, matricula, curso, login, senha) VALUES(02, 'Felipe Menegás', 147852, 'Análise e desenvolvimento de sistemas', 'felipe', 456);


INSERT INTO professor(id, nome_professor, login, senha, admin) VALUES(11, 'Angelito Rodrigues', 'angelito', 123, 1);
INSERT INTO professor(id, nome_professor, login, senha, admin) VALUES(12, 'Cristina Bobsin', 'cristina', 456, 1);


INSERT INTO disciplina(id, nome) VALUES(02, 'Programação Back-end');
INSERT INTO disciplina(id, nome) VALUES(03, 'Banco de Dados');


INSERT INTO turma(numero_turma, turno, id_professor, id_disciplina) VALUES(11, 23, 11, 02);
INSERT INTO turma(numero_turma, turno, id_professor, id_disciplina) VALUES(12, 33, 12, 03);


INSERT INTO inscricoes(id, id_aluno, numero_turma) VALUES(35, 01, 11);
INSERT INTO inscricoes(id, id_aluno, numero_turma) VALUES(36, 02, 11);

DELETE FROM aluno WHERE id = 2;