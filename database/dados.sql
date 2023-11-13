DROP TABLE aluno;
CREATE TABLE aluno(
	id int unsigned not null auto_increment,
	nome varchar(100) not null,
    matricula int not null,
    curso varchar(100) not null,
	login varchar(20),
	senha varchar(20),
    PRIMARY KEY (id)
);
INSERT INTO aluno(id, nome, matricula, curso) VALUES(01, 'Eduarda Rosseto', 159951, 'Sistemas para internet');
INSERT INTO aluno(id, nome, matricula, curso) VALUES(02, 'Felipe Menegás', 147852, 'Análise e desenvolvimento de sistemas');

DROP TABLE professor;
CREATE TABLE professor(
    id int unsigned not null auto_increment,
    nome varchar(100) not null,
	login varchar(20),
	senha varchar(20),
    PRIMARY KEY (id)
);
INSERT INTO professor(id, nome) VALUES(11, 'Angelito Rodrigues');
INSERT INTO professor(id, nome) VALUES(12, 'Cristina Bobsin');

DROP TABLE disciplina;
CREATE TABLE disciplina(
    id int unsigned not null auto_increment,
    nome varchar(100) not null,
    PRIMARY KEY (id)
);
INSERT INTO disciplina(id, nome) VALUES(02, 'Programação Back-end');
INSERT INTO disciplina(id, nome) VALUES(03, 'Banco de Dados');

DROP TABLE turma;
CREATE TABLE turma(
    numero_turma int,
    turno int,
    id_professor int unsigned not null,
    id_disciplina int unsigned not null,
    PRIMARY KEY (numero_turma),
    CONSTRAINT fk_professor_id FOREIGN KEY (id_professor) REFERENCES professor (id),
    CONSTRAINT fk_disciplina_id FOREIGN KEY (id_disciplina) REFERENCES disciplina (id)
);
INSERT INTO turma(numero_turma, turno, id_professor, id_disciplina) VALUES(11, 23, 11, 02);
INSERT INTO turma(numero_turma, turno, id_professor, id_disciplina) VALUES(12, 33, 12, 03);

DROP TABLE inscricoes;
CREATE TABLE inscricoes(
    id int unsigned not null auto_increment,
    id_aluno int unsigned not null,
    numero_turma int,
    PRIMARY KEY (id),
    CONSTRAINT fk_aluno_id_aluno FOREIGN KEY (id_aluno) REFERENCES aluno (id),
    CONSTRAINT fk_turma_numero_turma FOREIGN KEY (numero_turma) REFERENCES turma (numero_turma)
);
INSERT INTO inscricoes(id, id_aluno, numero_turma) VALUES(35, 01, 11);
INSERT INTO inscricoes(id, id_aluno, numero_turma) VALUES(36, 02, 11);

SELECT * FROM aluno;
SELECT * FROM professor;
SELECT * FROM disciplina;
SELECT * FROM turma;
SELECT * FROM inscricoes;

ALTER TABLE aluno
ADD login varchar(20),
ADD senha varchar(20);

ALTER TABLE professor
ADD login varchar(20),
ADD senha varchar(20);