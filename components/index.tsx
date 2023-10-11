import type { NextPage } from "next";
import { memo, useCallback } from "react";
import styles from "./index.module.css";

const CifrapayLandingPage: NextPage = memo(() => {
  const onFrameContainerClick = useCallback(() => {
    window.location.href =
      "mailto:meajuda@cifrapay.digital?subject=Suporte - Cifrapay";
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    window.open("https://cifrapay.digital/#/download");
  }, []);

  return (
    <div className={styles.cifrapayLandingPage}>
      <img className={styles.doraWrapIcon} alt="" src="/dora-wrap.svg" />
      <div className={styles.frame}>
        <div className={styles.main}>
          <div className={styles.navbar}>
            <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
            <div />
            <div
              className={styles.contatoWrapper}
              onClick={onFrameContainerClick}
            >
              <b className={styles.contato}>Contato</b>
            </div>
          </div>
          <div className={styles.banner}>
            <div className={styles.frame1}>
              <b className={styles.descubraOCarto}>
                Descubra o cartão perfeito para você
              </b>
              <div className={styles.descubraOPoder}>
                Descubra o poder da nossa conta digital explore nossa linha de
                serviços e assuma o controle da sua vida financeira hoje mesmo.
              </div>
              <div
                className={styles.baixeNossoAppParent}
                onClick={onFrameContainer1Click}
              >
                <div className={styles.baixeNossoApp}>Baixe nosso app</div>
                <img className={styles.frameChild} alt="" src="/vector-7.svg" />
              </div>
              <div className={styles.frameParent}>
                <div />
                <div />
              </div>
            </div>
            <div className={styles.frame2}>
              <div className={styles.frameGroup}>
                <img className={styles.frameIcon} alt="" src="/frame.svg" />
                <div className={styles.frame3}>
                  <div className={styles.creditCard}>
                    <div className={styles.nmeroDoCartoParent}>
                      <div className={styles.nmeroDoCarto}>
                        Número do cartão
                      </div>
                      <b className={styles.b}>5202 0911 2019 2021</b>
                      <div className={styles.frame4}>
                        <img
                          className={styles.caf624027e71Icon}
                          alt=""
                          src="/650caf624027e7-1@2x.png"
                        />
                        <img
                          className={styles.vectorStrokeIcon}
                          alt=""
                          src="/vector-stroke.svg"
                        />
                      </div>
                      <div className={styles.frame5}>
                        <div className={styles.nome}>Nome</div>
                        <div className={styles.exp}>Exp.</div>
                      </div>
                      <div className={styles.frame6}>
                        <div className={styles.div}>09/27</div>
                        <div className={styles.rafaelSilva}>RAFAEL SILVA</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.logoSlider}>
            <div className={styles.upwork} />
            <div className={styles.petal} />
            <div className={styles.rakuten} />
            <div className={styles.nyt} />
            <div className={styles.vice} />
            <div className={styles.dell} />
          </div>
          <div className={styles.features}>
            <b className={styles.oQueOferecemos}>O que oferecemos?</b>
            <div className={styles.frameContainer}>
              <div className={styles.fParent}>
                <div className={styles.f}>
                  <img
                    className={styles.iconsecurity}
                    alt=""
                    src="/iconsecurity.svg"
                  />
                </div>
                <div className={styles.garantiaDeSeguranaParent}>
                  <div className={styles.garantiaDeSegurana}>
                    Garantia de segurança
                  </div>
                  <div className={styles.seusDadosFundos}>
                    Seus dados, fundos e transações estarão protegidos com
                    segurança por nossa Inteligência artificial.
                  </div>
                </div>
              </div>
              <div className={styles.fParent}>
                <div className={styles.f}>
                  <img className={styles.iconsecurity} alt="" src="/pie.svg" />
                </div>
                <div className={styles.garantiaDeSeguranaParent}>
                  <div className={styles.garantiaDeSegurana}>Conta Digital</div>
                  <div className={styles.seusDadosFundos}>
                    <p className={styles.oferemosUmaConta}>
                      Oferemos uma conta digital pra você
                    </p>
                    <p className={styles.oferemosUmaConta}>
                      com diversas funcionalidades e serviços, abra agora mesmo
                      uma conta conosco e conheça o Cifrapay
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.fParent}>
                <div className={styles.f}>
                  <img
                    className={styles.iconanalytics}
                    alt=""
                    src="/iconanalytics.svg"
                  />
                </div>
                <div className={styles.garantiaDeSeguranaParent}>
                  <div className={styles.garantiaDeSegurana}>
                    Multiplos Serviços
                  </div>
                  <div className={styles.seusDadosFundos}>
                    Oferemos, Pix,Ted,Doc,Boleto Pagamento de contas, Recarga de
                    celular, Cartões presentes, Pagamento por link, split de
                    pagamentos, gateway, e muito mais
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.frameDiv}>
              <div className={styles.projeteEPersonalizeOSeuCaParent}>
                <b className={styles.projeteEPersonalize}>
                  Projete e Personalize o seu cartão.
                </b>
                <div className={styles.vocTemA}>
                  Você tem a liberdade de personalizar o design do seu cartão,
                  garantindo uma experiência verdadeiramente única que fará você
                  se sentir extraordinário
                </div>
                <div className={styles.criarNovoCartoParent}>
                  <div className={styles.baixeNossoApp}>Criar novo cartão</div>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/vector-71.svg"
                  />
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.cardParent}>
                  <div className={styles.card}>
                    <div className={styles.name}>Name</div>
                    <div className={styles.creditCardNo}>Credit Card No.</div>
                    <div className={styles.exp1}>Exp.</div>
                    <div className={styles.div1}>09/27</div>
                    <div className={styles.rafaelSilva1}>RAFAEL SILVA</div>
                    <img
                      className={styles.excludeIcon}
                      alt=""
                      src="/exclude.svg"
                    />
                    <img
                      className={styles.vectorStrokeIcon1}
                      alt=""
                      src="/vector-stroke1.svg"
                    />
                    <b className={styles.b1}>5202 0911 2019 2021</b>
                  </div>
                  <div className={styles.card1}>
                    <div className={styles.name}>Nome</div>
                    <div className={styles.creditCardNo}>Credit Card No.</div>
                    <div className={styles.exp1}>Exp.</div>
                    <div className={styles.div2}> 09/27</div>
                    <div className={styles.rafaelSilva2}>RAFAEL SILVA</div>
                    <img
                      className={styles.excludeIcon}
                      alt=""
                      src="/exclude1.svg"
                    />
                    <img
                      className={styles.vectorStrokeIcon2}
                      alt=""
                      src="/vector-stroke2.svg"
                    />
                    <b className={styles.b2}>1602 0911 2019 2021</b>
                  </div>
                  <div className={styles.card2}>
                    <div className={styles.cardChild} />
                    <img
                      className={styles.caf624027e71Icon1}
                      alt=""
                      src="/650caf624027e7-11@2x.png"
                    />
                    <div className={styles.nome2}>Nome</div>
                    <div className={styles.nmeroDoCarto1}>Número do cartão</div>
                    <div className={styles.exp3}>Exp.</div>
                    <div className={styles.div3}>09/27</div>
                    <div className={styles.rafaelSilva3}>RAFAEL SILVA</div>
                    <img
                      className={styles.vectorStrokeIcon3}
                      alt=""
                      src="/vector-stroke3.svg"
                    />
                    <b className={styles.b3}>5202 0911 2019 2021</b>
                  </div>
                </div>
                <img className={styles.frameInner} alt="" src="/star-17.svg" />
              </div>
            </div>
          </div>
          <div className={styles.section1}>
            <div className={styles.frameParent2}>
              <div className={styles.frameParent3}>
                <div className={styles.cardGroup}>
                  <div className={styles.card3}>
                    <div className={styles.nome3}>Nome</div>
                    <div className={styles.nmeroDoCarto2}>Número do cartão</div>
                    <div className={styles.exp4}>Exp.</div>
                    <div className={styles.div4}>09/27</div>
                    <div className={styles.rafaelSilva4}>RAFAEL SILVA</div>
                    <img
                      className={styles.vectorStrokeIcon4}
                      alt=""
                      src="/vector-stroke4.svg"
                    />
                    <b className={styles.b4}>5202 0911 2019 2021</b>
                  </div>
                  <div className={styles.card4}>
                    <div className={styles.nome4}>Nome</div>
                    <div className={styles.nmeroDoCarto3}>Número do cartão</div>
                    <div className={styles.exp5}>Exp.</div>
                    <div className={styles.div5}>09/27</div>
                    <div className={styles.rafaelSilva5}>RAFAEL SILVA</div>
                    <img
                      className={styles.caf624027e72Icon}
                      alt=""
                      src="/650caf624027e7-12@2x.png"
                    />
                    <img
                      className={styles.caf624027e72Icon}
                      alt=""
                      src="/650caf624027e7-12@2x.png"
                    />
                    <img
                      className={styles.vectorStrokeIcon5}
                      alt=""
                      src="/vector-stroke5.svg"
                    />
                    <b className={styles.b5}>5202 0911 2019 2021</b>
                  </div>
                </div>
                <img className={styles.starIcon} alt="" src="/star-171.svg" />
              </div>
              <div className={styles.encontreOCartoPerfeitoParParent}>
                <b className={styles.projeteEPersonalize}>
                  Encontre o cartão perfeito para você
                </b>
                <div className={styles.descubraComFacilidade}>
                  Descubra com facilidade o seu cartão ideal. Nossa seleção
                  abrangente atende a todas as necessidades financeiras e
                  estilos de vida. Quer você busque recompensas em dinheiro,
                  benefícios de viagem ou crédito para construção, temos o
                  cartão de crédito perfeito esperando por você. Liberte as
                  possibilidades e encontre o cartão de crédito que se adapta
                  aos seus objetivos e aspirações exclusivos.
                </div>
                <div className={styles.saibaMaisWrapper}>
                  <div className={styles.baixeNossoApp}>Saiba mais</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.frame7}>
              <div className={styles.frame8}>
                <img className={styles.frameIcon1} alt="" src="/frame1.svg" />
              </div>
              <div className={styles.timaContaDigital}>
                "Ótima conta digital o Cifrapay veio para mudar a minha saúde
                financeira alguns conselhos práticos sobre como podemos refinar
                nossas operações diarias."
              </div>
              <div className={styles.frame9}>
                <img
                  className={styles.ellipseIcon}
                  alt=""
                  src="/ellipse@2x.png"
                />
                <div className={styles.section}>
                  <div className={styles.rafaelTrindade}>Rafael Trindade</div>
                  <div className={styles.rioDeJaneiro}>Rio de janeiro</div>
                </div>
              </div>
            </div>
            <div className={styles.frame11}>
              <div className={styles.frame8}>
                <img className={styles.frameIcon1} alt="" src="/frame2.svg" />
              </div>
              <div className={styles.timaContaDigital}>
                "É atraente e altamente adaptável. É exatamente o que estou
                procurando, definitivamente, sem dor de cabeça, conta digital
                segura e prática."
              </div>
              <div className={styles.frame13}>
                <img
                  className={styles.ellipseIcon}
                  alt=""
                  src="/ellipse1@2x.png"
                />
                <div className={styles.section}>
                  <div className={styles.rafaelTrindade}>Nathan Laerte</div>
                  <div className={styles.rioDeJaneiro}>Rio de Janeiro</div>
                </div>
              </div>
            </div>
            <div className={styles.frame7}>
              <div className={styles.frame8}>
                <img className={styles.frameIcon1} alt="" src="/frame2.svg" />
              </div>
              <div className={styles.timaContaDigital}>
                "Estou muito satisfeita com isso. Estou pronto para continuar.
                Isso realmente me poupa tempo e esforço. É exatamente o que
                falta em nosso negócio."
              </div>
              <div className={styles.frame9}>
                <img
                  className={styles.ellipseIcon}
                  alt=""
                  src="/ellipse2@2x.png"
                />
                <div className={styles.section}>
                  <div className={styles.rafaelTrindade}>Jennifer silva</div>
                  <div className={styles.rioDeJaneiro}>São Paulo</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.features}>
            <b className={styles.oQueOferecemos}>Dúvidas frequentes</b>
            <div className={styles.frameParent4}>
              <div className={styles.frameParent5}>
                <div className={styles.comoFaoParaAbrirUmaContaParent}>
                  <b className={styles.comoFaoPara}>
                    Como faço para abrir uma conta no cifrapay
                  </b>
                  <img className={styles.icon} alt="" src="/.svg" />
                </div>
                <div className={styles.baixeNossoApp1}>
                  Baixe nosso app na playstore ou apple store, o processo e bem
                  rapido, seguro e pratico não leva nem 5 minutos tudo bem?
                </div>
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.comoFaoParaAbrirUmaContaParent}>
                  <b className={styles.comoFaoPara}>
                    Tenho garantia de que meus dados estão seguros?
                  </b>
                  <img className={styles.icon1} alt="" src="/1.svg" />
                </div>
                <div className={styles.applyingForA}>
                  {" "}
                  Applying for a credit card online is simple. Just visit our
                  website, select the desired credit card, and click on the
                  "Apply Now" button. Follow the instructions, provide your
                  information, and submit your application securely.
                </div>
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.comoFaoParaAbrirUmaContaParent}>
                  <b className={styles.comoFaoPara}>
                    Como o Cifrapay garante uma transação segura?
                  </b>
                  <img className={styles.icon1} alt="" src="/1.svg" />
                </div>
                <div className={styles.applyingForA}>
                  Annual fees may apply to some credit cards, but not all. Our
                  credit card details page will specify if there are any annual
                  fees associated with the card you're interested in.
                </div>
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.comoFaoParaAbrirUmaContaParent}>
                  <b className={styles.comoFaoPara}>
                    Como consigo mais limites na minha conta digital?
                  </b>
                  <img className={styles.icon1} alt="" src="/1.svg" />
                </div>
                <div className={styles.applyingForA}>
                  {" "}
                  Once your credit card application is approved, it typically
                  takes 7 to 10 business days to receive your physical card by
                  mail. You can start using your virtual card immediately after
                  approval for online purchases.
                </div>
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.comoFaoParaAbrirUmaContaParent}>
                  <b className={styles.comoFaoPara}>
                    Como posso me comunicar com o suporte do cifrapay?
                  </b>
                  <img className={styles.icon1} alt="" src="/1.svg" />
                </div>
                <div className={styles.applyingForA}>
                  You can easily check your credit card balance and transactions
                  through our secure online banking portal or mobile app. Simply
                  log in to your account to access your credit card information.
                </div>
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.comoFaoParaAbrirUmaContaParent}>
                  <b className={styles.comoFaoPara}>
                    Meu cartão e minhas senhas estão seguras?
                  </b>
                  <img className={styles.icon1} alt="" src="/1.svg" />
                </div>
                <div className={styles.applyingForA}>
                  Yes, we prioritize the security of your information. Our
                  credit card systems use encryption and industry-standard
                  security measures to protect your data, ensuring a safe and
                  seamless experience.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.footer1}>
              <div className={styles.footerChild} />
              <div className={styles.features1} />
              <div className={styles.frame19} />
              <img
                className={styles.logoFooterIcon}
                alt=""
                src="/logo-footer@2x.png"
              />
            </div>
            <div className={styles.cta}>
              <div className={styles.frame20}>
                <div className={styles.frame21}>
                  <div className={styles.frame22}>
                    <div className={styles.frame23}>
                      <b className={styles.maneiraFcilDe}>
                        Maneira fácil de gerenciar suas finanças
                      </b>
                      <div className={styles.cifrapayFcilDe}>
                        Cifrapay fácil de usar, venha ter uma experiência unica
                        em nosso app. compatível com Android e iOS.
                      </div>
                    </div>
                    <div className={styles.frame24}>
                      <div className={styles.badgesappStore}>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <div className={styles.badgesappStore}>
                        <img
                          className={styles.vectorIcon1}
                          alt=""
                          src="/vector1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className={styles.mockup1Icon}
                alt=""
                src="/mockup-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CifrapayLandingPage;
