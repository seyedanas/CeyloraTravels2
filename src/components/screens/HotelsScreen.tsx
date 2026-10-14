import React, { useState } from 'react';
import { HOTELS_CATALOG } from '../../data/travelData';
import { CurrencyCode, HotelItem } from '../../types/travel';
import { Star, MapPin, Check, SlidersHorizontal, Sparkles } from 'lucide-react';

interface HotelsScreenProps {
  currency: CurrencyCode;
  onBookHotel: (hotel: HotelItem) => void;
  onBookPlace?: (placeName: string, category?: string) => void;
}

export const HotelsScreen: React.FC<HotelsScreenProps> = ({ currency, onBookHotel, onBookPlace }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [activeModalHotel, setActiveModalHotel] = useState<HotelItem | null>(null);

  const regions = ['all', 'Ella', 'Galle', 'Sigiriya', 'Yala', 'Bentota'];
  const types = ['all', 'Luxury Villa', 'Boutique Resort', 'Heritage Bungalow', 'Eco Retreat'];

  const filteredHotels = HOTELS_CATALOG.filter((hotel) => {
    const matchRegion = selectedRegion === 'all' || hotel.region === selectedRegion;
    const matchType = selectedType === 'all' || hotel.type === selectedType;
    return matchRegion && matchType;
  });

  return (
    <div className="bg-[#faf9f6] min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-[#0f2d25] text-white py-14 px-4 sm:px-8 border-b border-[#1b4339]">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c49a56] font-semibold block mb-2">
            ACCOMMODATION &amp; SANCTUARIES
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
            Hotels, Resorts &amp; Private Villas
          </h1>
          <p className="text-lg text-[#e6ca91] font-serif italic mt-2">
            From Sri Lankan Beaches to Mountain Escapes
          </p>
          <p className="text-gray-300 text-sm sm:text-base mt-3 max-w-3xl font-light leading-relaxed">
            Discover the perfect stay with Ceylora Travels. Whether you’re looking for a comfortable hotel, a luxurious resort, a private villa or a peaceful bungalow, we help you find the ideal accommodation anywhere in Sri Lanka, from golden beaches and coastal towns to misty mountains and scenic hill country.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8">
        {/* About Hotels & Villas Overview Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 card-shadow border border-gray-100 mb-8">
          <div className="max-w-4xl">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0f2d25] mb-2">
              Tailored Stays for Every Journey
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
              Choose from a wide range of options to suit different preferences, group sizes and budgets, including elegant hotels, luxury resorts, private villas with swimming pools and charming bungalows in beautiful locations.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed">
              We make hotel, villa and bungalow reservations simple and hassle-free, with competitive rates, personalised assistance and convenient booking arrangements.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-gray-100 text-xs">
            <div className="p-3 bg-[#faf7f2] rounded-lg border border-amber-100">
              <span className="font-bold text-gray-900 block">Golden Beach Resorts</span>
              <span className="text-[11px] text-gray-500 mt-0.5 block">Bentota, Galle &amp; Mirissa</span>
            </div>
            <div className="p-3 bg-[#faf7f2] rounded-lg border border-amber-100">
              <span className="font-bold text-gray-900 block">Private Pool Villas</span>
              <span className="text-[11px] text-gray-500 mt-0.5 block">Exclusive clifftop &amp; oceanfront</span>
            </div>
            <div className="p-3 bg-[#faf7f2] rounded-lg border border-amber-100">
              <span className="font-bold text-gray-900 block">Highland Bungalows</span>
              <span className="text-[11px] text-gray-500 mt-0.5 block">Ella &amp; Nuwara Eliya tea estates</span>
            </div>
            <div className="p-3 bg-[#faf7f2] rounded-lg border border-amber-100">
              <span className="font-bold text-gray-900 block">Hassle-Free Booking</span>
              <span className="text-[11px] text-gray-500 mt-0.5 block">Best rates &amp; personal assistance</span>
            </div>
          </div>
        </div>
        {/* Filter Controls Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
            <SlidersHorizontal className="w-4 h-4 text-[#a67b38]" />
            <span>Filter By:</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Region Filter */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs text-gray-500">Region:</span>
              {regions.map((reg) => (
                <button
                  key={reg}
                  onClick={() => setSelectedRegion(reg)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    selectedRegion === reg
                      ? 'bg-[#0f2d25] text-white font-semibold'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {reg === 'all' ? 'All Island' : reg}
                </button>
              ))}
            </div>

            {/* Type Filter */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs text-gray-500">Type:</span>
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedType(t)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    selectedType === t
                      ? 'bg-[#a67b38] text-white font-semibold'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {t === 'all' ? 'All Types' : t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-2xl overflow-hidden card-shadow border border-gray-100 flex flex-col group hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image & Type Badge */}
              <div className="relative h-60 overflow-hidden bg-gray-100">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 bg-[#0f2d25]/85 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                  {hotel.type}
                </span>
                <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{hotel.rating}</span>
                  <span className="text-gray-400 text-[10px] font-normal">({hotel.reviewsCount})</span>
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onBookPlace) {
                        onBookPlace(hotel.location, 'Hotels & Villas');
                      } else {
                        onBookHotel(hotel);
                      }
                    }}
                    className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#0f2d25] mb-1.5 cursor-pointer group/place text-left transition-colors"
                    title={`Click to fill Experience / Destination with ${hotel.location}`}
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#a67b38] group-hover/place:scale-110 transition-transform" />
                    <span className="font-semibold text-gray-700 group-hover/place:text-[#a67b38] group-hover/place:underline">
                      {hotel.location}
                    </span>
                  </button>

                  <h3 className="font-heading text-xl font-bold text-gray-900 group-hover:text-[#0f2d25] transition-colors leading-snug">
                    {hotel.name}
                  </h3>

                  <p className="text-xs text-gray-600 mt-2.5 line-clamp-2 leading-relaxed">
                    {hotel.description}
                  </p>

                  {/* Amenities Pills */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {hotel.amenities.slice(0, 4).map((amenity) => (
                      <span
                        key={amenity}
                        className="text-[11px] font-medium bg-[#faf7f2] text-gray-700 px-2.5 py-1 rounded-md"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Status and CTA */}
                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#0f2d25] font-semibold bg-[#faf7f2] px-2.5 py-1 rounded-md border border-amber-200/50">
                    <Sparkles className="w-3.5 h-3.5 text-[#a67b38]" />
                    <span>Boutique Stay</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveModalHotel(hotel)}
                      className="px-3 py-2 text-xs font-semibold text-gray-600 hover:text-[#0f2d25] hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => onBookHotel(hotel)}
                      className="px-4 py-2 bg-[#a67b38] hover:bg-[#90682b] text-white text-xs font-bold rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
                    >
                      Book Villa
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hotel Detail Quick View Modal */}
      {activeModalHotel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative">
            <button
              onClick={() => setActiveModalHotel(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold cursor-pointer w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
            >
              &times;
            </button>

            <div className="relative h-64 rounded-xl overflow-hidden mb-5">
              <img
                src={activeModalHotel.image}
                alt={activeModalHotel.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-3 left-3 bg-[#0f2d25]/90 text-white text-xs px-3 py-1 rounded-full font-medium">
                {activeModalHotel.type}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-[#a67b38] font-semibold">
              <MapPin className="w-4 h-4" />
              <span>{activeModalHotel.location}</span>
            </div>

            <h2 className="font-heading text-2xl font-bold text-gray-900 mt-1">
              {activeModalHotel.name}
            </h2>

            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              {activeModalHotel.description}
            </p>

            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mt-5 mb-2">
              Signature Amenities &amp; Services
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {activeModalHotel.amenities.map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-gray-700">
                  <span className="w-4 h-4 rounded-full bg-[#f6efe4] text-[#a67b38] flex items-center justify-center text-[10px]">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-500">Reservation Type:</span>
                <div className="text-sm font-bold text-[#0f2d25] flex items-center gap-1.5 mt-0.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#a67b38]" />
                  <span>Direct Booking &amp; Concierge Support</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveModalHotel(null)}
                  className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    onBookHotel(activeModalHotel);
                    setActiveModalHotel(null);
                  }}
                  className="px-6 py-2.5 bg-[#a67b38] hover:bg-[#90682b] text-white text-xs font-bold rounded-lg shadow-sm cursor-pointer"
                >
                  Reserve Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
