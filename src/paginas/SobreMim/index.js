import fotoCapa from "assets/sobre_mim_capa.png";
import PostModelo from "componentes/PostModelo";
import styles from "./SobreMim.module.css";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim(){
    return(
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
        <h3 className={styles.subtitulo}>
            Satisfação, eu sou o Vitor!
        </h3>

        <img
            src={fotoSobreMim}
            alt="foto do Vitor Alves olhando para o lado"
            className={styles.fotoSobreMim}
        />
        <p className={styles.paragrafo}>
            Oi, tudo bem? Eu sou Analista de Infraestrutura de TI na Poli e estou feliz de te ver por aqui.
        </p>
        <p className={styles.paragrafo}>
            Minha história com computação começou na infância, onde minha mãe me proporcionou contato com computadores e celulares desde os meus 3 anos de idade. Por ser muito curioso fui aprendendo tudo sobre a área sozinho, através de pesquisas e conversas com colegas da área. Dessa forma, adquiri conhecimentos sobre formatação, pacote office, segurança, otimização. Nessa época não imaginava que isso se tornaria meu trabalho.                 
        </p>
        <p className={styles.paragrafo}>
            No ensino superior, escolhi cursar Engenharia de Computaçãp na Universidade Federal de Goiás (UFG). Lá eu estou aprendendo lógica de programação, programação orientada a objetos, e estrtura de dados, nas linguagens C, Java e C respectivamente. Hoje meu objetivo é me tornar um desenvolvedor web e estou fazendo cursos voltados para esta área. Por isso, já tenho skills em HTML, CSS, JavaScript, React e pretendo aprender muito mais.
        </p>
        <p className={styles.paragrafo}>
            Antes mesmo de iniciar na faculdade, consegui uma vaga de estágio para trabalhar na Poli, na época entrei na área de RH, atuando no Departamento Pessoal, mas surgiu a oportunidade de trabalhar com a Infra Interna da empresa, e eu abracei, e desde então atua na área de hardware da empresa, prestando suporte a toda equipe. Porém, paralelamente sigo estudando desenvolvimento para poder futuramente integrar o time dessa área.
        </p>
        </PostModelo>        
    )
}   