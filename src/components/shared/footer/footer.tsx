"use client";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full h-auto bg-gradient-to-t from-[#c8bfe7] to-[#f4ede4]">
            <div className="max-w-7xl mx-auto px-4 tablet:px-6 notebook:px-8 h-full">
                <div className="py-8 tablet:py-12 h-full">
                    <div className="grid grid-cols-2 mobile:grid-cols-1 gap-8">
                        {/* Contact Information */}
                        <div className="space-y-4 text-center">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Contacto
                            </h3>
                            <a
                                href="mailto:memora.institucional@gmail.com"
                                className="block text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                memora.institucional@gmail.com
                            </a>
                        </div>

                        {/* Social Media */}
                        <div className="space-y-4 text-center">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Redes Sociales
                            </h3>
                            <div className="flex space-x-4 justify-center">
                                <a
                                    href="https://www.instagram.com/memora.duelo/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    <img
                                        src="/Images/footer/instagram.svg"
                                        alt="Instagram"
                                        className="w-6 h-6"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-8 pt-8 border-t border-gray-400">
                        <div className="flex flex-row mobile:flex-col justify-between mobile:justify-center items-center space-y-0 mobile:space-y-4 text-left mobile:text-center">
                            <p className="text-sm text-gray-600">
                                © {currentYear} MÉMORA. Todos los derechos
                                reservados.
                            </p>
                            <p className="text-sm text-gray-600">
                                Diseño y desarrollo por{" "}
                                <a
                                    href="https://eneasbaroni.com.ar/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-900 hover:text-gray-700 transition-colors"
                                >
                                    Eneas
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
