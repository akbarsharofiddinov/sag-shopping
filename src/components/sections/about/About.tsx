import AdditionalInfo from "./AdditionalInfo";

const About = () => {
  return (
    <section className="section-about" id="about">
      <div className="container">
        <h1 className="title">Наша история</h1>
        <div className="introduction">
          <p>
            “OKS TECHNOLOGIES” O‘zbekistondagi axborot-kommunikatsiya
            texnologiyalari sohasidagi yetakchilardan biri bo‘lib, o‘z
            segmentida 10 yildan ortiq tajribaga ega yuqori toifali
            mutaxassislar jamoasidir. Biz davlat idoralari va xususiy
            kompaniyalarning geografik joylashuvi, faoliyat turi, buyurtmaning
            murakkabligi va yo'nalishidan qat'iy nazar istalgan loyihalarini
            raqamlashtirish imkoniga egamiz Faoliyat davomida 400 ga yaqin
            bir-birini takrorlamas muvaffaqiyatli loyihalar bajarilgan bo'lib,
            ulardan eng yiriklari bilan tanishib chiqishingiz mumkin:
          </p>
          <p className="boldStyled">
            <b>
              O'zbekiston milliy axborot agentligi Kun.uz - O'zbekiston va jahon
              yangiliklari Eksportchilarga subsidiya berish ERP tizimi
              Tribuna.uz - Sport yangiliklari Eksportchilar portali
            </b>
          </p>
          <p>
            va boshqa ko'plab loyihalarimiz hamkorlar hamda foydalanuvchilar
            tomonidan ijobiy baholanmoqda. Yirik loyihalarimizdan "Apoint" hamda
            "Finiso" Sturt UP lari hozirgi kunda jahon bozorida o'zining o'rnini
            egallash uchun shiddat bilan faoliyat olib bormoqda Tugallangan har
            bir loyihamiz mijozimizning barcha istak va g'oyalarini to'liq
            o'zida mujassam etgan holda bir qarashda o'zini samarali namoyon
            etadi. Biz loyihaga ko'lami va turidan qat'iy nazar puxta
            yondashishni ustuvor vazifa deb bilamiz va amalga oshiramiz. Buning
            uchun ishni tizimli tashkil qilib, sohaning eng yaxshi
            mutaxassislarini jalb qilamiz. Biz veb-dasturlash, kreativ dizayn
            yechimlari sohasidagi xizmatlarni taklif qilamiz. Agarda sizda hali
            loyiha qanday bo'lishi haqida aniq fikr va qaror mavjud bo'lmasa,
            biz sizga avvalo, loyiha menejerini biriktiramiz. So'ngra "First
            concept than design" qonuniyatiga asoslanib, vazifani bajarish uchun
            loyihani, avvalo, o'rganamiz hamda tajribali mutaxassislar tomonidan
            konsepsiya ishlab chiqib, loyiha dizayni (eskiz)ni tayyorlaymiz. Bu
            esa istalgan loyihani muvaffaqiyatli amalaga oshirish garovi
            bo'ladi. Orzuyingizdagi web-dastur, kreativ ammo qulay dizayn va eng
            yaxshi mobil ilovani biz bilan birgalikda tayyorlang!
          </p>
        </div>
        <AdditionalInfo />
      </div>
    </section>
  );
};

export default About;
