import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 代理模板Servlet。
 * Created by zhang on 2019/5/18.
 */
public class ProxyTemplateServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //前端代理页面地址（B页面）
        String proxy = req.getParameter("proxy");
        //前端A页面回调函数
        String callback = req.getParameter("callback");
        resp.sendRedirect(proxy + "?callback=" + callback + "&arg=success");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req, resp);
    }
}
