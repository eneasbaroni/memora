const ContactBtn = () => {
    const phoneNumber = "+5493534086560";
    const message = encodeURIComponent(
        "Quiero obtener mas información acerca de Mémora"
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    return (
        <>
            <a
                className="bg-secondaryColor hover:bg-secondaryColor/80 transition-all duration-300 text-white px-4 py-2 rounded-full cursor-pointer"
                href={whatsappUrl}
                target="_blank"
            >
                Solicitar Memora
            </a>
        </>
    );
};
export default ContactBtn;
