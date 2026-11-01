// Cloudflare Worker (miễn phí): mở link Google Maps rút gọn để Sổ Tay Chuyến Đi đọc được tên + toạ độ.
// Triển khai xong, thêm vào config.js:  window.SOTAY_LINK_RESOLVER="https://<ten-worker>.workers.dev/?url=";
const ALLOW=/^https:\/\/(maps\.app\.goo\.gl|goo\.gl\/maps|g\.co\/kgs|(www\.)?google\.[a-z.]+\/maps|maps\.google\.[a-z.]+)/i;
export default {
  async fetch(req){
    const cors={"access-control-allow-origin":"*","content-type":"application/json; charset=utf-8"};
    const u=new URL(req.url).searchParams.get("url")||"";
    if(!ALLOW.test(u)) return new Response(JSON.stringify({error:"only google maps links"}),{status:400,headers:cors});
    const r=await fetch(u,{redirect:"follow",headers:{"user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36","accept-language":"vi,en;q=0.8","cookie":"CONSENT=YES+cb; SOCS=CAI"}});
    const html=(await r.text()).slice(0,300000);
    const keep=(html.match(/<meta[^>]+(og:title|og:image)[^>]*>/g)||[]).join("")+(html.match(/https:\/\/[^"'\s]*staticmap[^"'\s]*/)||[""])[0]+(html.match(/\/maps\/place\/[^"'\s\\]+/)||[""])[0];
    return new Response(JSON.stringify({url:r.url,contents:keep}),{headers:cors});
  }
};
