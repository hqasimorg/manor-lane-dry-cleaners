import { SITE_CONFIG } from "@/lib/constants/site";

export function MapEmbed() {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden">
      <iframe
        src={SITE_CONFIG.googleMapsUrl || `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.5!2d${SITE_CONFIG.coordinates.lng}!3d${SITE_CONFIG.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI2JzU4LjIiTiAwwrAwMCcwOS40IkU!5e0!3m2!1sen!2suk!4v1`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Manor Lane Dry Cleaners Location"
      />
    </div>
  );
}
