// --- 多语言配置 ---
const I18n = {
    cn: {
        app_title: "尾巴咖啡",
        status: "系统在线",
        tab_new: "新建订单",
        tab_scan: "票据核销",
        btn_encrypt: "生成订单",
        btn_decrypt: "读取解析",
        btn_copy: "复制文本",
        btn_save: "保存影像",
        ph_encrypt: "// 请在此输入备注信息...",
        ph_decrypt: "// 请在此粘贴小票内容以进行解码...",
        label_decoded: "> 解码数据流:",
        footer_ver: "安全终端 V8.2",
        // Receipt
        r_title: "尾巴咖啡",
        r_sub: "独立烘焙 · 精品咖啡",
        r_date: "日期",
        r_no: "单号",
        r_guest: "顾客",
        r_total: "合计",
        r_auth: "校验",
        r_ref: "溯源",
        r_waiting: "- 等待数据录入 -",
        r_thanks: "谢谢惠顾 · 欢迎再次光临",
        r_fold: "/// 区域折叠：已隐藏 {n} 项商品 ///",
        guest_walkin: "散客",
        currency: "¥",
        // Toast / Modal
        toast_ok: "系统消息：小票已复制",
        toast_img: "系统消息：影像已生成",
        toast_empty: "错误：输入内容为空",
        toast_err: "错误：数据校验失败",
        modal_title: "影像预览",
        modal_tip: "长按图片保存或分享",
        btn_share: "分享影像"
    },
    en: {
        app_title: "TAIL CAFÉ",
        status: "SYSTEM ONLINE",
        tab_new: "NEW ORDER",
        tab_scan: "VERIFY TICKET",
        btn_encrypt: "GENERATE ORDER",
        btn_decrypt: "SCAN TICKET",
        btn_copy: "COPY TEXT",
        btn_save: "SAVE IMAGE",
        ph_encrypt: "// Enter remarks here...",
        ph_decrypt: "// Paste receipt content here...",
        label_decoded: "> DECODED DATA STREAM:",
        footer_ver: "SECURE TERMINAL V8.2",
        // Receipt
        r_title: "TAIL CAFÉ",
        r_sub: "INDEPENDENT ROASTERY",
        r_date: "DATE",
        r_no: "ORDER #",
        r_guest: "GUEST",
        r_total: "TOTAL",
        r_auth: "AUTH",
        r_ref: "REF",
        r_waiting: "- WAITING FOR DATA -",
        r_thanks: "THANK YOU FOR VISITING",
        r_fold: "/// SECTION FOLDED: {n} ITEMS HIDDEN ///",
        guest_walkin: "WALK-IN",
        currency: "$",
        // Toast / Modal
        toast_ok: "SYSTEM: RECEIPT COPIED",
        toast_img: "SYSTEM: IMAGE SAVED",
        toast_empty: "ERROR: INPUT EMPTY",
        toast_err: "ERROR: INVALID DATA",
        modal_title: "SNAPSHOT PREVIEW",
        modal_tip: "Long press to save or share",
        btn_share: "SHARE IMAGE"
    }
};

class ProtocolV8 {
    constructor() {
        this.lang = 'cn';
        this.dict_cn = {
            drinks: ['浓缩咖啡', '美式咖啡', '拿铁', '卡布奇诺', '澳白', '玛奇朵', '摩卡', '柯达多', '冷萃', '氮气冷萃', '阿法奇朵', '红茶拿铁', '抹茶拿铁', '经典可可', '热苹果酒', '每日手冲'],
            milks: ['全脂', '脱脂', '燕麦', '豆奶'],
            syrups: ['无糖', '香草', '焦糖', '榛果'],
            temps: ['热', '冰', '温', '超热'],
            shots: ['标准', '低因', '浅烘', '精萃'],
            desserts: [
                { name: '纽约芝士蛋糕', desc: '经典原味 | 单切', price: 32.0 },
                { name: '提拉米苏', desc: '经典意式 | 可可粉', price: 35.0 },
                { name: '黄油可颂', desc: '法国黄油 | 复烤', price: 18.0 },
                { name: '蓝莓麦芬', desc: '新鲜蓝莓 | 当日烤', price: 20.0 },
                { name: '软曲奇', desc: '巧克力豆 | 软心', price: 12.0 },
                { name: '贝果', desc: '原味 | 奶油芝士', price: 22.0 },
                { name: '布朗尼', desc: '核桃仁 | 浓郁', price: 25.0 }
            ],
            priceMap: [15, 20, 25, 25, 28, 22, 28, 22, 25, 30, 32, 24, 26, 22, 20, 18]
        };
        this.dict_en = {
            drinks: ['Espresso', 'Americano', 'Latte', 'Cappuccino', 'Flat White', 'Macchiato', 'Mocha', 'Cortado', 'Cold Brew', 'Nitro', 'Affogato', 'Tea Latte', 'Matcha', 'Cocoa', 'Cider', 'House Drip'],
            milks: ['Whole', 'Skim', 'Oat', 'Soy'],
            syrups: ['No Syrup', 'Vanilla', 'Caramel', 'Hazelnut'],
            temps: ['Hot', 'Iced', 'Warm', 'X-Hot'],
            shots: ['Reg', 'Decaf', 'Blonde', 'Ristretto'],
            desserts: [
                { name: 'Cheesecake', desc: 'NY Style | 1 Pc', price: 6.5 },
                { name: 'Tiramisu', desc: 'Classic | Cocoa', price: 7.0 },
                { name: 'Croissant', desc: 'Butter | Warm', price: 4.5 },
                { name: 'Muffin', desc: 'Blueberry | Fresh', price: 4.0 },
                { name: 'Cookie', desc: 'Choc Chip | Soft', price: 3.5 },
                { name: 'Bagel', desc: 'Plain | Cream', price: 5.0 },
                { name: 'Brownie', desc: 'Walnut | Fudge', price: 5.5 }
            ],
            priceMap: [3.5, 4.0, 5.0, 5.0, 5.0, 4.5, 5.5, 4.5, 4.5, 5.5, 6.0, 4.5, 5.0, 4.0, 4.0, 3.0]
        };
    }

    setLang(lang) { this.lang = lang; }
    getDict() { return this.lang === 'cn' ? this.dict_cn : this.dict_en; }

    encrypt(text) {
        const dict = this.getDict();
        const encoder = new TextEncoder();
        const rawBytes = encoder.encode(text);
        let bits = rawBytes.length.toString(2).padStart(12, '0');
        for (let b of rawBytes) bits += b.toString(2).padStart(8, '0');

        let ptr = 0;
        let chunkOrder = this.readBits(bits, ptr, 16);
        ptr += chunkOrder.read;
        const orderHex = parseInt(chunkOrder.val.padEnd(16, '0'), 2).toString(16).toUpperCase().padStart(4, '0');

        let chunkMember = this.readBits(bits, ptr, 48);
        ptr += chunkMember.read;
        const memberHex = this.bitsToHex(chunkMember.val.padEnd(48, '0'));
        const memberFmt = memberHex.match(/.{1,4}/g).join('-');

        const items = [];
        while (ptr < bits.length - 32 || items.length < 4) {
            let chunk = this.readBits(bits, ptr, 12);
            if (chunk.read < 12) {
                if (Math.random() > 0.7) {
                    const dessert = dict.desserts[Math.floor(Math.random() * dict.desserts.length)];
                    items.push(dessert);
                } else {
                    let bitStr = "";
                    for (let i = 0; i < 12; i++) bitStr += (Math.random() > 0.5 ? '1' : '0');
                    items.push(this.bitsToItem(bitStr, dict));
                }
            } else {
                ptr += chunk.read;
                items.push(this.bitsToItem(chunk.val, dict));
            }
        }

        let chunkFooter = this.readBits(bits, ptr, 99999);
        let footerBits = chunkFooter.val;
        while (footerBits.length < 32) footerBits += (Math.random() > 0.5 ? '1' : '0');
        const authHex = this.bitsToHex(footerBits);

        return { orderId: orderHex, memberId: memberFmt, items: items, authCode: authHex, traceId: 'T' + Date.now().toString().substr(-8) };
    }

    decrypt(data) {
        let bits = "";
        bits += parseInt(data.orderId, 16).toString(2).padStart(16, '0');
        const cleanMember = data.memberId.replace(/-/g, '');
        for (let c of cleanMember) bits += parseInt(c, 16).toString(2).padStart(4, '0');
        for (let item of data.items) {
            if (this.dict_cn.drinks.includes(item.name)) bits += this.itemToBits(item, this.dict_cn);
            else if (this.dict_en.drinks.includes(item.name)) bits += this.itemToBits(item, this.dict_en);
        }
        for (let c of data.authCode) bits += parseInt(c, 16).toString(2).padStart(4, '0');
        const len = parseInt(bits.substr(0, 12), 2);
        const payloadBits = bits.substr(12, len * 8);
        const bytes = [];
        for (let i = 0; i < payloadBits.length; i += 8) bytes.push(parseInt(payloadBits.substr(i, 8), 2));
        return new TextDecoder().decode(new Uint8Array(bytes));
    }

    readBits(source, ptr, len) {
        if (ptr >= source.length) return { val: "", read: 0 };
        const chunk = source.substr(ptr, len);
        return { val: chunk, read: chunk.length };
    }
    bitsToHex(bits) {
        let hex = "";
        for (let i = 0; i < bits.length; i += 4) hex += parseInt(bits.substr(i, 4), 2).toString(16).toUpperCase();
        return hex;
    }
    bitsToItem(bits12, dict) {
        const d = parseInt(bits12.substr(0, 4), 2);
        const m = parseInt(bits12.substr(4, 2), 2);
        const s = parseInt(bits12.substr(6, 2), 2);
        const t = parseInt(bits12.substr(8, 2), 2);
        const h = parseInt(bits12.substr(10, 2), 2);
        return {
            name: dict.drinks[d],
            desc: `${dict.temps[t]} | ${dict.milks[m]} | ${dict.syrups[s]} | ${dict.shots[h]}`,
            price: dict.priceMap[d] + (s > 0 ? 0.5 : 0) + (m > 1 ? 0.5 : 0)
        };
    }
    itemToBits(item, dict) {
        let d = dict.drinks.indexOf(item.name);
        if (d === -1) return "000000000000";
        let parts = item.desc.split('|').map(s => s.trim());
        let t = dict.temps.indexOf(parts[0]);
        let m = dict.milks.indexOf(parts[1]);
        let s = dict.syrups.indexOf(parts[2]);
        let h = dict.shots.indexOf(parts[3]);
        if (t < 0) t = 0; if (m < 0) m = 0; if (s < 0) s = 0; if (h < 0) h = 0;
        return d.toString(2).padStart(4, '0') + m.toString(2).padStart(2, '0') + s.toString(2).padStart(2, '0') + t.toString(2).padStart(2, '0') + h.toString(2).padStart(2, '0');
    }

    parseText(text) {
        const data = { items: [] };
        const orderM = text.match(/(?:NO\.|单号|ORDER)\s*[#:]*\s*([0-9A-F]+)/i);
        if (orderM) data.orderId = orderM[1];

        const memM = text.match(/[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}/i);
        data.memberId = memM ? memM[0] : "0000-0000-0000";

        const authM = text.match(/(?:AUTH|校验)\s*[:]?\s*(\S+)/i);
        if (authM) data.authCode = authM[1];

        const lines = text.split('\n');
        const allDrinks = [...this.dict_cn.drinks, ...this.dict_en.drinks];
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i].trim();
            for (let d of allDrinks) {
                if (line.startsWith(d)) {
                    if (i + 1 < lines.length && lines[i + 1].includes('|')) {
                        data.items.push({ name: d, desc: lines[i + 1].trim() });
                    }
                    break;
                }
            }
        }
        return data;
    }
}

const protocol = new ProtocolV8();
const ui = {
    lang: 'cn',
    lastData: null,
    currentBlob: null, // 存储当前生成的图片Blob
    inputEncrypt: document.getElementById('input-encrypt'),
    inputDecrypt: document.getElementById('input-decrypt'),
    outputDecrypt: document.getElementById('output-decrypt'),
    charCount: document.getElementById('char-count'),
    modal: document.getElementById('img-modal'),

    init: () => {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => ui.switchTab(e.currentTarget.dataset.tab));
        });
        document.getElementById('lang-cn').addEventListener('click', () => ui.switchLang('cn'));
        document.getElementById('lang-en').addEventListener('click', () => ui.switchLang('en'));
        document.getElementById('btn-encrypt').addEventListener('click', ui.encrypt);
        document.getElementById('btn-decrypt').addEventListener('click', ui.decrypt);
        document.getElementById('btn-copy').addEventListener('click', ui.copy);
        document.getElementById('btn-save-img').addEventListener('click', ui.saveImage);

        // Modal Events
        document.getElementById('btn-close-modal').addEventListener('click', ui.closeModal);
        document.getElementById('img-modal').addEventListener('click', (e) => {
            if (e.target === ui.modal) ui.closeModal();
        });
        document.getElementById('btn-share-action').addEventListener('click', ui.shareImage);

        ui.inputEncrypt.addEventListener('input', (e) => {
            const len = new TextEncoder().encode(e.target.value).length;
            ui.charCount.innerText = `${len} B`;
        });
        ui.updateTexts();
    },

    switchTab: (tab) => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelector(`.tab-btn[data-tab="${tab}"]`).classList.add('active');
        document.querySelectorAll('.panel-section').forEach(p => p.classList.remove('active'));
        document.getElementById(`panel-${tab}`).classList.add('active');
        if (tab === 'encrypt') ui.inputEncrypt.focus(); else ui.inputDecrypt.focus();
    },

    switchLang: (l) => {
        ui.lang = l;
        protocol.setLang(l);
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        document.getElementById(`lang-${l}`).classList.add('active');
        ui.updateTexts();
    },

    updateTexts: () => {
        const t = I18n[ui.lang];
        document.querySelectorAll('[data-i18n]').forEach(el => el.innerText = t[el.dataset.i18n]);
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => el.placeholder = t[el.dataset.i18nPlaceholder]);
    },

    generateBarcode: (elementId) => {
        const el = document.getElementById(elementId);
        let gradient = "linear-gradient(90deg, ";
        let pos = 0;
        while (pos < 100) {
            const w = Math.random() * 1.5 + 0.5;
            const g = Math.random() * 2 + 0.5;
            gradient += `#000 ${pos}%, #000 ${pos + w}%, transparent ${pos + w}%, transparent ${pos + w + g}%, `;
            pos += w + g;
        }
        el.style.background = gradient.slice(0, -2) + ")";
    },

    encrypt: () => {
        const text = ui.inputEncrypt.value;
        if (!text) return;
        const data = protocol.encrypt(text);
        ui.lastData = data;
        ui.renderReceipt(data);
        ui.inputEncrypt.value = "";
        ui.charCount.innerText = "0 B";
    },

    decrypt: () => {
        const text = ui.inputDecrypt.value;
        const t = I18n[ui.lang];
        if (!text) {
            ui.showToast(t.toast_empty);
            return;
        }
        try {
            const data = protocol.parseText(text);
            const res = protocol.decrypt(data);
            ui.outputDecrypt.innerText = "";
            let i = 0;
            document.getElementById('decrypt-status').innerText = "SUCCESS";
            document.getElementById('decrypt-status').style.color = "#00ff9d";
            const type = () => {
                if (i < res.length) {
                    ui.outputDecrypt.innerText += res.charAt(i);
                    i++;
                    setTimeout(type, 20);
                }
            }
            type();
        } catch (e) {
            ui.outputDecrypt.innerText = t.toast_err;
            document.getElementById('decrypt-status').innerText = "ERROR";
            document.getElementById('decrypt-status').style.color = "#ff5f56";
        }
    },

    renderReceipt: (data) => {
        const t = I18n[ui.lang];
        const now = new Date();
        document.getElementById('r-date').innerText = now.toLocaleDateString();
        document.getElementById('r-order').innerText = data.orderId;
        document.getElementById('r-member').innerText = (data.memberId === "0000-0000-0000") ? t.guest_walkin : data.memberId;
        document.getElementById('r-auth').innerText = data.authCode;
        document.getElementById('r-trace').innerText = data.traceId;

        const list = document.getElementById('r-list');
        list.innerHTML = '';
        let total = 0;

        ui.generateBarcode('r-barcode');

        data.items.forEach(item => total += item.price);
        document.getElementById('r-total').innerText = t.currency + total.toFixed(2);

        const MAX_SHOW = 8;
        const HEAD_COUNT = 3;
        const TAIL_COUNT = 3;

        let renderQueue = [];
        if (data.items.length > MAX_SHOW) {
            renderQueue = data.items.slice(0, HEAD_COUNT);
            renderQueue.push({ _type: 'fold' });
            renderQueue = renderQueue.concat(data.items.slice(data.items.length - TAIL_COUNT));
        } else {
            renderQueue = data.items;
        }

        renderQueue.forEach((item, i) => {
            if (item._type === 'fold') {
                const fold = document.createElement('div');
                fold.className = 'receipt-fold';
                fold.innerHTML = `<span class="fold-icon">✂</span>`;
                list.appendChild(fold);
            } else {
                const div = document.createElement('div');
                div.className = 'r-item';
                div.style.animationDelay = `${i * 0.05}s`;
                div.innerHTML = `
                    <div class="r-main">
                        <span>${item.name}</span>
                        <span>${t.currency}${item.price.toFixed(2)}</span>
                    </div>
                    <div class="r-desc">${item.desc}</div>
                `;
                list.appendChild(div);
            }
        });

        setTimeout(() => {
            document.getElementById('receiptPaper').scrollTop = 999;
        }, 100);
    },

    copy: () => {
        if (!ui.lastData) return;
        const t = I18n[ui.lang];
        const d = ui.lastData;
        const now = document.getElementById('r-date').innerText;

        let txt = `     ${t.r_title}\n ${t.r_sub}\n\n`;
        txt += `${t.r_date}: ${now}\n${t.r_no}: ${d.orderId}\n${t.r_guest}: ${d.memberId === "0000-0000-0000" ? t.guest_walkin : d.memberId}\n`;
        txt += `--------------------------------\n`;

        d.items.forEach(item => {
            const name = item.name;
            const price = t.currency + item.price.toFixed(2);
            let len = 0; for (let c of name) len += (c.charCodeAt(0) > 255 ? 2 : 1);
            let space = Math.max(1, 30 - len - price.length);
            txt += `${name}${' '.repeat(space)}${price}\n  ${item.desc}\n`;
        });

        let totalVal = 0; d.items.forEach(i => totalVal += i.price);
        const totalStr = t.currency + totalVal.toFixed(2);

        txt += `--------------------------------\n`;
        let lLen = 0; for (let c of t.r_total) lLen += (c.charCodeAt(0) > 255 ? 2 : 1);
        let tSpace = Math.max(1, 30 - lLen - totalStr.length);

        txt += `${t.r_total}${' '.repeat(tSpace)}${totalStr}\n\n`;
        txt += `${t.r_auth}: ${d.authCode}\n${t.r_ref}: ${d.traceId}\n\n${t.r_thanks}`;

        navigator.clipboard.writeText(txt).then(() => ui.showToast(t.toast_ok));
    },

    // 核心重写：强力静止截图
    saveImage: () => {
        const original = document.getElementById('receiptPaper');
        if (!original) return;

        // 1. 克隆
        const clone = original.cloneNode(true);
        // 2. 加上强制静态 Class
        clone.classList.add('snapshot-mode');

        // 3. 挂载到 Body (不可见区域)
        document.body.appendChild(clone);

        // 4. 等待 DOM 渲染 (Double RAF 确保渲染完成)
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                html2canvas(clone, {
                    scale: 2,
                    useCORS: true,
                    backgroundColor: '#f4f1ea', // 小票背景色
                    logging: false,
                    windowWidth: 400
                }).then(canvas => {
                    document.body.removeChild(clone); // 清理

                    canvas.toBlob(blob => {
                        ui.currentBlob = blob;
                        const url = URL.createObjectURL(blob);
                        document.getElementById('generated-img').src = url;
                        ui.openModal();
                    }, 'image/png');
                }).catch(err => {
                    console.error(err);
                    document.body.removeChild(clone);
                    ui.showToast(I18n[ui.lang].toast_err);
                });
            });
        });
    },

    shareImage: () => {
        if (!ui.currentBlob) return;
        const t = I18n[ui.lang];
        const fileName = `TailCafe_${Date.now()}.png`;
        const file = new File([ui.currentBlob], fileName, { type: "image/png" });

        if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
            navigator.share({
                files: [file],
                title: t.r_title,
                text: t.r_sub
            }).catch(console.error);
        } else {
            // Fallback download
            const url = URL.createObjectURL(ui.currentBlob);
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            ui.showToast("已保存到相册");
        }
    },

    openModal: () => {
        ui.modal.classList.add('active');
    },
    closeModal: () => {
        ui.modal.classList.remove('active');
    },

    showToast: (msg) => {
        const t = document.getElementById('toast');
        t.innerText = msg;
        t.classList.add('show');
        setTimeout(() => t.classList.remove('show'), 2000);
    }
};

ui.init();