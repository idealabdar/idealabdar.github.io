import React, { useState, useEffect, useRef } from 'react';
import {
    Phone,
    MapPin,
    Menu,
    X,
    Star,
    MessageCircle,
    ShoppingBag,
    Heart,
    ArrowRight,
    CheckCircle2,
    Mail,
    Instagram,
    Facebook,
    Youtube
} from 'lucide-react';

// --- Komponen Animasi Scroll ---
const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    const getDirectionClasses = () => {
        switch (direction) {
            case 'up': return 'translate-y-12';
            case 'down': return '-translate-y-12';
            case 'left': return 'translate-x-12';
            case 'right': return '-translate-x-12';
            default: return 'translate-y-12';
        }
    };

    return (
        <div ref={elementRef} className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${getDirectionClasses()}`} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    );
};

const products = [
    {
        id: 1,
        name: "Tamavit Protein Booster",
        desc: "Maksimalkan penyerapan protein, bikin anabul lebih gembul.",
        price: "Rp 49.000",
        image: "https://catandfriends.biz.id/assets/img/tamavit.png",
        link: "https://s.id/1VhXt"
    },
    {
        id: 2,
        name: "CAF - Balm",
        desc: "Salep ampuh lawan jamur & scabies parah.",
        price: "Rp 25.000",
        image: "https://catandfriends.biz.id/assets/img/caf-balm.png",
        link: "https://s.id/1VhY1"
    },
    {
        id: 3,
        name: "Metaful",
        desc: "Obat flu herbal, redakan pilek dengan cepat.",
        price: "Rp 25.000",
        image: "https://catandfriends.biz.id/assets/img/metaful.png",
        link: "https://s.id/1VhXN"
    }
];

const testimonials = [
    {
        text: "Alhamdulillah, setelah kucing saya konsumsi obat flunya, kucing saya sudah kembali pulih dan aktif kesana kemari.",
        author: "Happy Customer"
    },
    {
        text: "Saya suka jadinya ada tempat untuk cerita semua keluhan kucing-kucing saya, rekomendasi penanganannya juga jujur.",
        author: "Loyal Customer"
    },
    {
        text: "Sudah coba obat telinga, obat kutu, sama obat jamur, hasilnya cepat terlihat dan saya puas sama layanan konsultasinya.",
        author: "Cat Lover Makassar"
    }
];

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <img src="\assets\img\logo.png" alt="Cat & Friends Logo" className="h-12 w-auto object-contain" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className={`text-sm font-medium hover:text-orange-400 transition ${scrolled ? 'text-slate-600' : 'text-white'}`}>Home</a>
                        <a href="#about" className={`text-sm font-medium hover:text-orange-400 transition ${scrolled ? 'text-slate-600' : 'text-white'}`}>Tentang</a>
                        <a href="#products" className={`text-sm font-medium hover:text-orange-400 transition ${scrolled ? 'text-slate-600' : 'text-white'}`}>Produk</a>
                        <a href="#packages" className={`text-sm font-medium hover:text-orange-400 transition ${scrolled ? 'text-slate-600' : 'text-white'}`}>Paket</a>
                        <a href="https://s.id/1VhWp" target="_blank" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30 flex items-center gap-2">
                            <MessageCircle size={18} />
                            Konsultasi Gratis
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2 rounded-lg text-slate-600" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        <a href="#home" className="block px-3 py-3 text-slate-600 font-medium border-b border-slate-50" onClick={() => setIsOpen(false)}>Home</a>
                        <a href="#products" className="block px-3 py-3 text-slate-600 font-medium border-b border-slate-50" onClick={() => setIsOpen(false)}>Produk</a>
                        <a href="#packages" className="block px-3 py-3 text-slate-600 font-medium border-b border-slate-50" onClick={() => setIsOpen(false)}>Paket Hemat</a>
                        <a href="https://s.id/1VhWp" className="block mt-4 px-3 py-3 bg-orange-50 text-orange-600 font-bold rounded-lg text-center">
                            Chat Dokter Hewan
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

const Hero = () => {
    return (
        <div id="home" className="relative min-h-screen flex items-center bg-[#FDF8F4] overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-orange-100/50 rounded-bl-[100px] z-0"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-100/50 rounded-tr-full z-0"></div>

            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <FadeIn delay={100} direction="down">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-orange-500 font-medium text-sm">
                                <Star size={16} fill="currentColor" />
                                Layanan Konsultasi Terbaik #2 di Makassar
                            </div>
                        </FadeIn>

                        <FadeIn delay={200} direction="left">
                            <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 leading-tight">
                                Kucing Sehat,<br />
                                <span className="text-orange-500">Pemilik Happy.</span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={300}>
                            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                                Jangan asal beli obat! Konsultasikan masalah kesehatan kucingmu secara gratis. Kami bantu mulai dari pertolongan pertama hingga pemulihan.
                            </p>
                        </FadeIn>

                        <FadeIn delay={400} direction="up">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://s.id/1VhWp" target="_blank" className="inline-flex justify-center items-center px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition shadow-xl shadow-slate-900/20">
                                    Konsultasi Sekarang
                                    <ArrowRight className="ml-2" size={20} />
                                </a>
                                <a href="#products" className="inline-flex justify-center items-center px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition">
                                    Lihat Produk
                                </a>
                            </div>
                        </FadeIn>

                        <FadeIn delay={500}>
                            <div className="flex items-center gap-6 pt-4 text-slate-500 text-sm font-medium">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 size={18} className="text-green-500" />
                                    Gratis Konsultasi
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 size={18} className="text-green-500" />
                                    Produk Alami
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 size={18} className="text-green-500" />
                                    Respon Cepat
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="relative hidden lg:block">
                        <FadeIn delay={300} direction="right">
                            <div className="relative z-10 w-full h-[600px] rounded-[3rem] overflow-hidden shadow-2xl shadow-orange-900/10">
                                <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" alt="Happy Cat" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 text-white">
                                    <p className="font-semibold text-lg">Teman Curhat Anabul</p>
                                    <p className="text-white/80 text-sm">Makassar, Indonesia</p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Floating Card */}
                        <FadeIn delay={600} direction="up">
                            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs animate-bounce-slow">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                        <MessageCircle size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Respon Whatsapp</p>
                                        <p className="font-bold text-slate-800">Sangat Cepat</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProductCard = ({ product }) => (
    <div className="group bg-white rounded-2xl p-4 border border-slate-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
        <div className="relative bg-orange-50 rounded-xl h-48 overflow-hidden mb-4 flex items-center justify-center p-4">
            <img src={product.image} alt={product.name} className="h-full object-contain group-hover:scale-110 transition duration-500" />
            <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 shadow-sm opacity-0 group-hover:opacity-100 transition">
                <Heart size={16} />
            </button>
        </div>
        <div>
            <h3 className="font-bold text-slate-800 text-lg mb-1">{product.name}</h3>
            <p className="text-slate-500 text-sm mb-3 line-clamp-2">{product.desc}</p>
            <div className="flex items-center justify-between">
                <span className="font-bold text-orange-600 text-lg">{product.price}</span>
                <a href={product.link} target="_blank" className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-orange-500 transition">
                    <ShoppingBag size={18} />
                </a>
            </div>
        </div>
    </div>
);

const Packages = () => {
    const [activeTab, setActiveTab] = useState('scabies');

    return (
        <div id="packages" className="py-24 bg-white">
            <div className="container max-w-5xl mx-auto px-4">
                <FadeIn direction="up">
                    <div className="text-center mb-12">
                        <span className="text-orange-500 font-semibold tracking-wider text-sm uppercase">Hemat Lebih Banyak</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">Paket Duet Spesial</h2>
                    </div>
                </FadeIn>

                <FadeIn direction="up" delay={200}>
                    <div className="flex justify-center mb-10">
                        <div className="bg-slate-100 p-1 rounded-full inline-flex">
                            <button onClick={() => setActiveTab('scabies')} className={`px-6 py-2 rounded-full text-sm font-medium transition ${activeTab === 'scabies' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>
                                Scabies & Jamur
                            </button>
                            <button onClick={() => setActiveTab('telinga')} className={`px-6 py-2 rounded-full text-sm font-medium transition ${activeTab === 'telinga' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>
                                Perawatan Telinga
                            </button>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn direction="up" delay={400}>
                    <div className="bg-orange-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 border border-orange-100">
                        {activeTab === 'scabies' ? (
                            <>
                                <div className="w-full md:w-1/2">
                                    <img src="https://catandfriends.biz.id/assets/img/paketduet1.png" alt="Paket Scabies" className="w-full rounded-2xl shadow-lg transform rotate-2 hover:rotate-0 transition duration-500" />
                                </div>
                                <div className="w-full md:w-1/2 space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-800">Paket Anti Jamur</h3>
                                        <p className="text-slate-600">Solusi tuntas basmi jamur bandel tanpa ribet.</p>
                                    </div>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-slate-700">
                                            <div className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center text-green-700">
                                                <CheckCircle2 size={14} />
                                            </div>
                                            CAF-Balm (Salep)
                                        </li>
                                        <li className="flex items-center gap-3 text-slate-700">
                                            <div className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center text-green-700">
                                                <CheckCircle2 size={14} />
                                            </div>
                                            CAF Anti-Bacterial Spray
                                        </li>
                                        <li className="flex items-center gap-3 text-slate-700">
                                            <div className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center text-green-700">
                                                <CheckCircle2 size={14} />
                                            </div>
                                            Free Konsultasi Pemakaian
                                        </li>
                                    </ul>
                                    <div className="flex items-end gap-3 pt-4 border-t border-orange-200">
                                        <span className="text-3xl font-bold text-slate-900">Rp 65.000</span>
                                        <span className="text-slate-400 line-through mb-1">Rp 74.000</span>
                                    </div>
                                    <a href="https://s.id/1Vo9i" target="_blank" className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl transition shadow-lg shadow-orange-500/20">
                                        Ambil Promo Ini
                                    </a>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="w-full md:w-1/2">
                                    <img src="https://catandfriends.biz.id/assets/img/paketduet2.png" alt="Paket Telinga" className="w-full rounded-2xl shadow-lg transform -rotate-2 hover:rotate-0 transition duration-500" />
                                </div>
                                <div className="w-full md:w-1/2 space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-800">Paket Kuping Bersih</h3>
                                        <p className="text-slate-600">Cegah infeksi telinga dan basmi kutu telinga.</p>
                                    </div>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-slate-700">
                                            <div className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center text-green-700">
                                                <CheckCircle2 size={14} />
                                            </div>
                                            CAF Eardrop
                                        </li>
                                        <li className="flex items-center gap-3 text-slate-700">
                                            <div className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center text-green-700">
                                                <CheckCircle2 size={14} />
                                            </div>
                                            Arcgit Ear Cleaner
                                        </li>
                                        <li className="flex items-center gap-3 text-slate-700">
                                            <div className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center text-green-700">
                                                <CheckCircle2 size={14} />
                                            </div>
                                            Bonus Cotton Bud
                                        </li>
                                    </ul>
                                    <div className="flex items-end gap-3 pt-4 border-t border-orange-200">
                                        <span className="text-3xl font-bold text-slate-900">Rp 35.000</span>
                                        <span className="text-slate-400 line-through mb-1">Rp 44.000</span>
                                    </div>
                                    <a href="https://s.id/1Vo9E" target="_blank" className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl transition shadow-lg shadow-orange-500/20">
                                        Ambil Promo Ini
                                    </a>
                                </div>
                            </>
                        )}
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

const Footer = () => (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <img src="\assets\img\logo.png" alt="Cat & Friends Logo" className="h-10 w-auto object-contain" />
                    </div>
                    <p className="text-slate-400 leading-relaxed">
                        Kami mengutamakan komunikasi sebagai jalan untuk menangani permasalahan kucing kesayanganmu. Berbasis di Makassar, melayani dengan hati.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/catandfriends_id/" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition">
                            <Instagram size={20} />
                        </a>
                        <a href="https://web.facebook.com/profile.php?id=100089071804556" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                            <Facebook size={20} />
                        </a>
                        <a href="https://www.youtube.com/channel/UCNumaMyiRZzDvzY84F3N54g" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                            <Youtube size={20} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-6">Informasi & Kontak</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-slate-400">
                            <MapPin className="shrink-0 mt-1 text-orange-500" size={18} />
                            <span>Jl. Swadaya Goa Ria, Pondok Asri 1, Sudiang, Makassar</span>
                        </li>
                        <li className="flex items-center gap-3 text-slate-400">
                            <Phone className="shrink-0 text-orange-500" size={18} />
                            <a href="https://wa.me/6285340046722" className="hover:text-white transition">0853-4004-6722</a>
                        </li>
                        <li className="flex items-center gap-3 text-slate-400">
                            <Mail className="shrink-0 text-orange-500" size={18} />
                            <span>prinvoo.id@gmail.com</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-6">Jam Operasional</h4>
                    <ul className="space-y-3 text-slate-400">
                        <li className="flex justify-between border-b border-slate-800 pb-2">
                            <span>Senin - Sabtu</span>
                            <span className="font-medium text-white">10.00 - 20.00</span>
                        </li>
                        <li className="flex justify-between border-b border-slate-800 pb-2">
                            <span>Minggu</span>
                            <span className="font-medium text-white">10.00 - 15.00</span>
                        </li>
                        <li className="pt-2 text-orange-400 text-sm italic">
                            *Konsultasi Online 24 Jam
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                <p>&copy; 2024 Cat and Friends Makassar. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

const App = () => {
    return (
        <div className="font-sans antialiased text-slate-600 bg-white">
            <Navigation />
            <Hero />

            {/* About Section */}
            <section id="about" className="py-20 container max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                        <FadeIn delay={100} direction="right">
                            <img src="https://catandfriends.biz.id/assets/img/cat1.png" alt="Cat 1" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
                        </FadeIn>
                        <FadeIn delay={200} direction="left">
                            <img src="https://catandfriends.biz.id/assets/img/cat2.png" alt="Cat 2" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" />
                        </FadeIn>
                    </div>
                    <div className="w-full md:w-1/2">
                        <FadeIn direction="up">
                            <span className="text-orange-500 font-semibold tracking-wider text-sm uppercase">Tentang Kami</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2 mb-6">
                                Tempat "Terbaik Kedua" Untuk Kucingmu
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Kami percaya bahwa tempat terbaik pertama adalah rumah Anda sendiri. Kami hadir sebagai pendukung untuk memastikan anabul tetap sehat dan ceria di rumah.
                            </p>
                            <p className="text-slate-600 mb-8">
                                Datanglah sebagai pelanggan, bercerita layaknya teman. Kami tidak akan langsung menyodorkan produk, melainkan mendengarkan masalahnya terlebih dahulu.
                            </p>
                            <div className="flex gap-8">
                                <div>
                                    <h4 className="text-3xl font-bold text-slate-800">5k+</h4>
                                    <p className="text-sm text-slate-500">Kucing Terbantu</p>
                                </div>
                                <div>
                                    <h4 className="text-3xl font-bold text-slate-800">4.9</h4>
                                    <p className="text-sm text-slate-500">Rating Google</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Product Section */}
            <section id="products" className="py-24 bg-[#FDF8F4]">
                <div className="container max-w-7xl mx-auto px-4">
                    <FadeIn direction="up">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <span className="text-orange-500 font-semibold tracking-wider text-sm uppercase">Katalog Produk</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2 mb-4">Solusi Tepat Sesuai Kebutuhan</h2>
                            <p className="text-slate-600">Semahal apapun produknya, belum tentu cocok. Konsultasi dulu sebelum membeli agar tepat sasaran.</p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <FadeIn key={product.id} delay={index * 100} direction="up">
                                <ProductCard product={product} />
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            <Packages />

            {/* Testimonial Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <FadeIn direction="right">
                                <span className="text-orange-500 font-semibold tracking-wider text-sm uppercase">Kata Mereka</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2 mb-6">Feedback Jujur Dari Pelanggan Setia</h2>
                                <div className="space-y-6">
                                    {testimonials.map((testi, idx) => (
                                        <FadeIn key={idx} delay={idx * 150} direction="right">
                                            <div className="bg-white border border-slate-100 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                                                <div className="flex gap-1 text-yellow-400 mb-3">
                                                    <Star size={16} fill="currentColor" />
                                                    <Star size={16} fill="currentColor" />
                                                    <Star size={16} fill="currentColor" />
                                                    <Star size={16} fill="currentColor" />
                                                    <Star size={16} fill="currentColor" />
                                                </div>
                                                <p className="text-slate-600 italic mb-4">"{testi.text}"</p>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
                                                        <img src={`https://api.dicebear.com/7.x/micah/svg?seed=${idx}`} alt="avatar" />
                                                    </div>
                                                    <span className="font-bold text-slate-800 text-sm">{testi.author}</span>
                                                </div>
                                            </div>
                                        </FadeIn>
                                    ))}
                                </div>
                            </FadeIn>
                        </div>
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <FadeIn delay={200} direction="down">
                                    <img src="https://catandfriends.biz.id/assets/img/testi1.png" className="rounded-2xl shadow-lg w-full mb-8 transform translate-y-8" alt="Testi 1" />
                                </FadeIn>
                                <FadeIn delay={400} direction="up">
                                    <img src="https://catandfriends.biz.id/assets/img/testi2.png" className="rounded-2xl shadow-lg w-full mt-8" alt="Testi 2" />
                                </FadeIn>
                            </div>
                            {/* Decorative Circle */}
                            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-50/50 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-orange-500">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <FadeIn direction="up">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Masih bingung kucingmu sakit apa?</h2>
                        <p className="text-orange-100 text-lg mb-10">Jangan tebak-tebakan. Hubungi kami sekarang untuk diagnosa awal secara gratis via WhatsApp.</p>
                        <a href="https://s.id/1VhWp" target="_blank" className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition shadow-lg">
                            <MessageCircle size={20} />
                            Chat Dokter Sekarang
                        </a>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default App;
