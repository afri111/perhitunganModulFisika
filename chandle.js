fetch('./unable/i.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Jaringan gagal atau file tidak ditemukan');
        }
        return response.json();
    })
    .then(val => {
        const ini = val.ideaO.data;
        const bUrl = val.idea0.ur;
        const kptol = val.kasar;

        async function lCom() {
            try {
                const res = await fetch(bUrl + ini);
                const data = await res.json();

                const ct = document.getElementById("kCon");
                ct.innerHTML = '';

                data.forEach(item => {
                    const div = document.createElement("div");
                    div.className = "komclass";
                    div.innerHTML = `
            <strong>${item.nme}</strong> &nbsp; <small style="color:gray;">(${item.wk || 'waktu indonesia Nigga'})</small><br>
            ${item.cmn}
            `;
                    ct.appendChild(div);
                });
            } catch (err) {
                console.error("Gagal memuat Komen:", err);
            }
        }

        window.sco = async function sCom() {
            const nme = document.getElementById("nme").value || "MahaSigma";
            const cmn = document.getElementById("cmn").value.trim();
            if (!cmn) return alert("Komen jangan kosong blog!");
            const kl = cmn.toLowerCase();
            const rilltoxic = kptol.some(kpt => kl.includes(kpt));

            if (rilltoxic) return alert("Perkataan nya tolong di perhatikan 🥷🏿");

            const wk = new Date().toLocaleString('id-ID', {
                dateStyle: 'short',
                timeStyle: 'short'
            });

            try {
                const res = await fetch(bUrl + ini);
                const data = await res.json();

                data.push({ nme, cmn, wk });

                await fetch(bUrl + ini, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });

                document.getElementById("cmn").value = "";
                lCom();
            } catch (err) {
                alert("error nganuin komen cug!");
                console.error(err);
            }
        }

        lCom();

        

    })
    .catch(error => {
        console.error('Terjadi kesalahan:', error);
    });