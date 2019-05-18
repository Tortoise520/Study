import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * 构造JSONP字符串，并响应到前端
 * JSONP的用处：解决前端跨域获取数据的问题
 * Created by zhang on 2019/5/14.
 */
public class JSONPServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String arrCusts[] = {"ZhangSan", "LiSi", "WangWu"};
        String strCusts = "[";
        for (int i = 0; i < arrCusts.length; i++) {
            String strCust = arrCusts[i];
            strCusts += "\"" + strCust + "\"";
            if (i != arrCusts.length - 1) {
                strCusts += ", ";
            }
        }
        strCusts += "]";

        //获取回调函数名称
        String cb = req.getParameter("cb");

        //目标字符串：callback(["ZhangSan", "LiSi", "WangWu"])
        String result = cb + "(" + strCusts +  ")";
        PrintWriter pw = resp.getWriter();
        resp.setContentType("text/plain");
        pw.println(result);
    }
}
