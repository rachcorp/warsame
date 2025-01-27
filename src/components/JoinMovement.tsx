const JoinMovement = () => {
  return (
    <section className="bg-[#E31837] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Movement
          </h2>
          <p className="text-xl text-white mb-8">
            Be part of the change in Ottawa West-Nepean. Sign up to receive updates and learn how you can get involved.
          </p>
          
          {/* Microsoft Form Embed */}
          <iframe 
            width="100%" 
            height="500px"
            src="https://forms.office.com/Pages/ResponsePage.aspx?id=MXintd9Is0qPaEDN-2l2wiwMjdFxPTpEg4oXoKZTAK1UMkM4NU1HWFlaRzE3S0pNTTY5V0tBT1lRVS4u&embed=true"
            frameBorder="0"
            marginWidth="0"
            marginHeight="0"
            style={{ border: 'none', maxWidth: '100%', maxHeight: '100vh' }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default JoinMovement; 