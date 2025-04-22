export default function MapEmbed() {
    const mapEmbed = `<iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3050.7113076276655!2d-75.11928578807749!3d40.12643667313702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b04f01a29317%3A0xb20d16d0a81f53d!2s1517%20Old%20York%20Rd%2C%20Abington%2C%20PA%2019001!5e0!3m2!1sen!2sus!4v1745349401644!5m2!1sen!2sus"
      width="100%"
      height="400"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>`;
  
    return (
      <div
        className="w-full max-w-4xl mx-auto rounded-md shadow-md overflow-hidden"
        dangerouslySetInnerHTML={{ __html: mapEmbed }}
      />
    );
  }