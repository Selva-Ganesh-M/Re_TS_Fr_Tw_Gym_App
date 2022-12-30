import { useState } from "react";
import Navbar from "@/components/navbar/Index";
import { useEffect } from "react";
import { Sections } from "./shared/types";

function App() {
  // STATE DECLARATION
  const [selectedSection, setSelectedSection] = useState<Sections>(
    Sections.Home
  );
  const [isTopOfThePage, setIsTopOfThePage] = useState<Boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfThePage(true);
        setSelectedSection(Sections.Home);
      }
      if (window.scrollY !== 0) {
        setIsTopOfThePage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfThePage={isTopOfThePage}
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />
      <div id="home">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint optio
        eius, exercitationem alias excepturi unde odio! Quasi obcaecati nesciunt
        rerum et possimus assumenda, harum at voluptatum earum eaque architecto
        officia quae magni deserunt eos laudantium quia doloribus nisi nihil,
        iste nam inventore aspernatur adipisci cumque. Accusamus sunt sed
        dolorem. Omnis ut harum blanditiis quos sit error incidunt doloribus aut
        provident. Cumque mollitia saepe corporis pariatur porro molestias?
        Dignissimos nobis quas assumenda ut? Quis, pariatur eum? Quibusdam nobis
        magni sit, explicabo labore quis voluptate tenetur officia sunt
        laudantium odio. Voluptate, veniam tenetur. Quidem, aspernatur. Pariatur
        nisi corrupti architecto laboriosam accusantium ex consequatur ipsam
        ratione eos dolore, magni qui nam fugit minima, corporis aspernatur non
        soluta quidem illo minus quas fugiat sed! Molestiae odio quas ipsa
        labore! Ullam repudiandae, minima provident, cum ab, dolorem autem eaque
        unde libero vero alias pariatur at iure sunt. Accusantium, deleniti. Cum
        excepturi quaerat distinctio voluptatem commodi aliquam quisquam laborum
        quas aut? Quo facilis minus pariatur dolore, magni mollitia. Distinctio
        quis aperiam cum laboriosam enim nobis praesentium itaque tempore,
        atque, beatae provident ea neque deleniti doloribus officiis, odio
        inventore. Nemo, laborum? Explicabo esse placeat quos! Explicabo
        doloribus, architecto consequatur rem quod ducimus provident iure!
        Quisquam accusantium laborum alias perferendis ipsum, sapiente soluta
        optio architecto doloribus, ratione commodi vitae? Officiis odit magni
        veniam a inventore laboriosam suscipit, quisquam soluta. Sed eius
        laboriosam deleniti, eaque consectetur ut odio exercitationem ab quae
        iusto deserunt enim dolor, possimus cumque praesentium blanditiis id
        voluptatibus neque magnam. Recusandae assumenda unde enim ratione dicta
        dolorem reprehenderit, aut eius dignissimos ut voluptate sunt atque
        vitae sit deserunt tempore quis similique necessitatibus facere.
        Suscipit nobis error, ad, molestiae sunt atque, a nam perferendis
        facilis saepe nesciunt exercitationem dolor repellat modi consequuntur
        in commodi. Dolore, eligendi delectus. Iure esse qui ratione sunt
        repellendus nemo at, nulla nam autem delectus repudiandae! Animi
        corporis rem officia veniam quidem esse ab qui. Voluptas laboriosam
        eligendi quos harum alias excepturi facilis, dolore dicta animi?
        Voluptates accusamus facilis quae ratione qui ducimus quam dolor et,
        eveniet veritatis facere illo ex rem minus optio cupiditate maxime, quos
        ut libero! Rerum maiores illum aut vitae sapiente corrupti expedita
        libero est! Magni nisi, quod enim atque soluta accusantium cupiditate
        debitis praesentium necessitatibus illum quisquam unde eligendi,
        expedita mollitia, inventore eum reiciendis natus cumque ratione porro
        magnam ad harum aperiam ipsam. Eligendi placeat magni labore ipsum
        expedita excepturi reiciendis provident ullam maxime, ad numquam quis.
        Accusantium minima veritatis similique at tenetur vitae velit. Dolorum
        excepturi cum iusto omnis ipsam temporibus ratione quam voluptatum
        repellendus? Beatae sed pariatur iste voluptatibus tenetur incidunt
        reprehenderit. Dolorem, in! Quo nostrum qui ratione obcaecati doloribus
        quam aliquam cum voluptatibus saepe facere officiis, eveniet voluptatem
        provident voluptate excepturi deleniti quos illo nulla neque! Temporibus
        nobis nulla molestiae! Quod sed exercitationem consectetur consequuntur
        obcaecati tempora culpa nobis voluptatibus eaque porro aliquid voluptas
        dicta excepturi quaerat repellat quo esse animi blanditiis quidem,
        itaque numquam laudantium omnis. Quis quibusdam temporibus perferendis
        cumque fugit maxime eum optio, ducimus voluptas modi unde, molestiae
        asperiores consequuntur fuga quod delectus qui eligendi neque
        voluptates, at iusto. Quidem deserunt, incidunt eveniet pariatur,
        repudiandae fuga tempore reiciendis voluptates a error optio?
        Voluptatibus numquam omnis, quisquam, nostrum optio perferendis adipisci
        veniam incidunt amet voluptates, doloribus maxime. Perspiciatis minima
        sint ab quasi corrupti? Dolore provident doloribus iure labore autem
        necessitatibus magni unde, deleniti rem dolor aut alias error? Sed quo
        maxime fugiat, excepturi est sit quaerat veritatis. Laboriosam,
        voluptatum doloremque ipsam odit libero nemo commodi debitis corporis
        explicabo modi, totam, similique iste a. Dolores praesentium ea
        accusamus ipsum molestiae quo fugiat nulla autem earum placeat debitis
        voluptates, ullam nihil rerum reprehenderit ipsam ad aliquid asperiores
        minima pariatur eaque fuga at! Dolorem esse sapiente quasi, in tenetur
        ad fugiat blanditiis labore quos facere et ut veritatis nostrum error
        dolores impedit, accusamus mollitia quibusdam eaque reiciendis libero.
        Consectetur veniam molestiae numquam at corrupti, voluptatibus nobis
        iste ipsam ullam blanditiis ipsa, saepe eveniet repellendus in quisquam
        optio expedita dolor quidem eum beatae, tenetur nihil sapiente minus. Ad
        cupiditate molestias perferendis a, necessitatibus corporis consectetur
        earum ut commodi, ullam quas saepe similique quae ratione distinctio.
        Illum numquam dolor, vitae expedita voluptatibus minus porro, eaque
        aliquid reiciendis odio iste corporis hic ipsum dicta asperiores at
        dolorem quo provident et eum accusamus doloremque? Ad sint, ipsum
        eveniet quae ex quia! A animi fugit molestiae totam corrupti harum
        dolorem, ipsam laborum similique quidem velit alias facere? Natus
        laboriosam illum minima doloribus nihil labore, reiciendis,
        reprehenderit possimus blanditiis repudiandae explicabo cumque? Maiores
        nobis illum quos mollitia nihil. Mollitia laudantium voluptatibus ipsum
        quibusdam maxime quo ratione praesentium natus dignissimos harum,
        aliquam exercitationem velit expedita vitae? Saepe eius harum fuga nulla
        necessitatibus, numquam, ipsam delectus culpa dicta quisquam architecto
        quia explicabo porro? Odit voluptatem iusto dignissimos. Quia placeat
        ipsa molestiae tempore voluptate possimus debitis, libero minima fugiat
        perspiciatis ipsum vitae optio voluptatum iusto aliquam quaerat alias,
        deleniti doloribus. Minima excepturi numquam et repellat voluptate
        laborum voluptatem officiis veniam iure! Atque a deleniti et obcaecati
        fugit, earum autem consequatur reprehenderit quaerat eum ut voluptatum
        repellendus totam officiis voluptas similique eaque corrupti asperiores
        accusamus dolore minima, unde tempora mollitia blanditiis? Ipsa numquam
        labore iste repellat, at omnis quasi repudiandae. Ad culpa voluptas
        necessitatibus placeat facere est totam numquam deserunt quidem
        veritatis et recusandae autem, molestias architecto dolore qui obcaecati
        enim? Nemo sed a asperiores, ab, voluptas alias odio dicta aperiam
        impedit maiores labore laudantium modi, saepe quidem eaque reprehenderit
        soluta vel nulla quod! Molestias maiores voluptatum numquam quos
        reprehenderit aperiam ducimus aliquam nobis, quo quaerat, exercitationem
        enim harum quod soluta ratione adipisci quidem necessitatibus. Nam
        laudantium ab cum voluptate dolor. Asperiores dolores consequatur quia
        sequi est sed veniam nulla illo eius pariatur amet molestiae neque
        assumenda quod ad, obcaecati dicta ut modi nam aperiam accusantium ullam
        tempore iusto? Porro error quidem assumenda odio ut quibusdam molestiae
        pariatur iste debitis, aliquam mollitia omnis quisquam quaerat tempora
        maiores deleniti animi atque distinctio alias eos! Perspiciatis magni
        explicabo nemo eveniet numquam, harum tenetur, sapiente rem obcaecati
        doloremque nihil labore ab ullam. Id doloremque, corrupti aspernatur
        laboriosam est aut!
      </div>
    </div>
  );
}

export default App;
