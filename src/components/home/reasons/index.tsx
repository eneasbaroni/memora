import ContactBtn from "../contactBtn";

const ReasonSection = () => {
    return (
        <div className="w-full text-white h-auto py-16 px-4 bg-mainColor flex flex-col gap-4 items-center justify-center">
            <div className="w-full flex flex-wrap gap-4 mobile:gap-8 items-start justify-center">
                <div className="w-[30%] tablet:w-[50%] mobile:w-full flex flex-col gap-4 items-center justify-center">
                    <h3 className="text-2xl tablet:text-xl font-safira text-center">
                        Porque hay recuerdos que pueden ser eternos.
                    </h3>
                    <p className="text-center tablet:text-sm">
                        <span className="font-bold">
                            Mémora te ofrece códigos QR para instalar en
                            lápidas, parcelas o urnas{" "}
                        </span>
                        , que, al ser escaneados con un celular, permiten
                        acceder a un video que guarda diversos momentos del ser
                        querido.
                        <span className="font-bold">
                            {" "}
                            Mémora QR Es una forma amorosa, sensible y moderna
                            de recordar.
                        </span>{" "}
                        Cada homenaje puede configurarse para ser{" "}
                        <span className="font-bold">
                            {" "}
                            público o privado,
                        </span>{" "}
                        según el deseo de la familia. En los casos en que se
                        prefiera mayor intimidad, se puede proteger con una
                        contraseña para que solo accedan quienes reciban la
                        misma.
                    </p>
                </div>
                <div className="w-[30%] tablet:w-[50%] mobile:w-full flex flex-col gap-4 items-center justify-center">
                    <h3 className="text-2xl tablet:text-xl font-safira text-center">
                        Porque hay recuerdos que también merecen ser cuidados
                    </h3>
                    <p className="text-center tablet:text-sm">
                        Vivimos en una cultura donde la muerte sigue siendo un
                        tema tabú, algo que muchas veces se evita o se silencia.
                        En
                        <span className="font-bold"> Mémora </span> proponemos
                        algo distinto:{" "}
                        <span className="font-bold">
                            {" "}
                            abrirle un lugar al recuerdo,
                        </span>{" "}
                        con belleza, emoción y sentido. Creemos en{" "}
                        <span className="font-bold">
                            {" "}
                            nuevas formas de homenajear,
                        </span>{" "}
                        de mirar el pasado con menos dolor, con más amor,
                        profundidad y gratitud.
                    </p>
                </div>
            </div>
            <div className="w-full py-8 border-y border-black/20 flex flex-col gap-4 items-center justify-center">
                <h4 className="text-2xl tablet:text-xl font-safira text-center">
                    ¿Por qué no recordar con una canción alegre?
                </h4>
                <h4 className="text-2xl tablet:text-xl font-safira text-center">
                    ¿Con las anécdotas más divertidas?
                </h4>
                <h4 className="text-2xl tablet:text-xl font-safira text-center">
                    ¿Con la risa de quien tanto extrañamos?
                </h4>
                <p className="tablet:text-sm">
                    <span className="font-bold">
                        Mémora nace para sostener ese amor que permanece
                        intacto,
                    </span>{" "}
                    ofreciendo una manera respetuosa, cuidada y significativa de
                    recordarlos.
                </p>
            </div>
            <ContactBtn />
        </div>
    );
};
export default ReasonSection;
